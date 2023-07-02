
import React, { useEffect, useState } from 'react';
import AllToysTabel from './AllToysTabel';
import { Helmet } from 'react-helmet';

const AllToys = () => {

    const [toys, setToys] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        fetch(`https://ass11-server-two.vercel.app/allToys`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>
                    All Toys
                </title>
            </Helmet>
            <div className="input-group my-5 flex justify-end">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered w-56 color" />
                <button className="btn btn-square ms-3 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-8 px-8">
                                Sub-category
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Available Quantity
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Seller Name
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Toy Name
                            </th>
                            <th scope="col" className="px-4 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-4 py-3">
                                View Details
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.filter(item => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                            }).map(toy => <AllToysTabel toy={toy} key={toy._id}></AllToysTabel>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;