import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabViwe = () => {
    return (
        <div className='my-20' >

            <Tabs>
                <TabList>
                    <Tab><span className='text-2xl font-semibold text-stone-600'>TRUCK</span></Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabViwe;