import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTabel = ({ toy }) => {
    const { _id, name, category, sellerName, quantity, price } = toy;

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                {category}
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {quantity}
            </th>
            <td className="px-6 py-4">
            {name}
            </td>

            <td className="px-6 py-4">
                {sellerName}
            </td>
            <td className="px-6 py-4">
                ${price}
            </td>
            <td className="px-6 py-4">
            <Link to={`${_id}`}><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            DETAILS
            </button></Link>
            </td>
        </tr>
    );
};

export default AllToysTabel;