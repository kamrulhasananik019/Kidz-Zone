import { useEffect, useState, } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabViewCards from './TabViewCards';

const TabViwe = () => {
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch(`https://ass11-server-two.vercel.app/categories?category=Sedans`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    }, [])

    const handleCategory = (event) => {
        const category = event.target.innerText;

        fetch(`https://ass11-server-two.vercel.app/categories?category=${category}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    };


    return (
        <div className='my-20'>
            <Tabs>
                <TabList onClick={handleCategory}>
                    <Tab ><span className='text-2xl font-semibold text-[#5145CD]'>Sedans</span></Tab>
                    <Tab ><span className='text-2xl font-semibold text-[#5145CD]'>SUVs</span></Tab>
                    <Tab><span className='text-2xl font-semibold text-[#5145CD]'>Trucks</span></Tab>


                </TabList>

                <TabPanel>

                    <div className='grid grid-cols-1 md:grid-cols-4'>
                        {toys.map(truck => <TabViewCards truck={truck} key={truck._id}></TabViewCards>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-4'>
                        {toys.map(truck => <TabViewCards truck={truck} key={truck._id}></TabViewCards>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-4'>
                        {toys.map(truck => <TabViewCards truck={truck} key={truck._id}></TabViewCards>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabViwe;
