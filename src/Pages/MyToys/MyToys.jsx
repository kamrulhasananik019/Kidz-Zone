import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysTable from './MyToysTable';
import { Helmet } from 'react-helmet';
import { Dropdown } from 'flowbite-react';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [sort, setSort] = useState(1);

    useEffect(() => {
        fetch(`https://server-tan-eight.vercel.app/myToys?sellerEmail=${user?.email}&sort=${sort}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [sort,user]);

    const handleDelete = id => {
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.isConfirmed){
                fetch(`https://server-tan-eight.vercel.app/myToys/${id}`, {
                    method: 'DELETE'
    
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                       
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(t => t._id !== id);
                            setToys(remaining)
                        }
                    })
            }
        })
        
    }



    return (
        <div>
            <Helmet>
                <title>
                    My Toys
                </title>
            </Helmet>
            <div className="mt-4 flex justify-end">
            <Dropdown className="color" label="Sort By">
                <Dropdown.Item >
                <a onClick={() => setSort(1)}>Ascending</a>
                </Dropdown.Item>
                <Dropdown.Item >
                <a onClick={() => setSort(-1)}>Descending</a>
                </Dropdown.Item>
            </Dropdown>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Seller
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Toy Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sub Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Available quantity
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map(toy => <MyToysTable toy={toy}
                            handleDelete={handleDelete} key={toy._id}></MyToysTable>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
