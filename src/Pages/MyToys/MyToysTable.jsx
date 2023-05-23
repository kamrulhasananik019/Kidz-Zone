import React from 'react';
import { Link } from 'react-router-dom';

const MyToysTable = ({ toy, handleDelete }) => {

    const { _id, name, category, sellerName, quantity, price } = toy;

    return (
        <tr
            className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                {sellerName}
            </th>
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4">{category}</td>
            <td className="px-6 py-4">${price}</td>
            <td className="px-6 py-4"> {quantity} </td>
            <td className="px-6 py-8 space-x-6">
                <Link to={`${_id}`}><button  className="px-8 py-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-slate-400 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Update</button></Link>
                <button onClick={() => handleDelete(_id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Remove </button>
            </td>
        </tr>
    );
};

export default MyToysTable;