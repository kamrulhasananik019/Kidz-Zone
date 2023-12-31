import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const TabViewCards = ({ truck }) => {
    const {_id,
        name,
        price,
        ratings,
        picture,
        quantity,
    } = truck;
    return (
        <div>
            <Card
                className="transform transition duration-500 hover:scale-110  bg-[#EEF2FF] h-full w-80 lg:w-full mx-auto"
                imgSrc={picture}
            >
                <h2 className="lg:text-2xl color3">{name}</h2>
                <p className="lg:text-lg"><span className="color3">Price: </span>${price}</p>
                <p className=""><span className="color3">Available quantity:</span> {quantity}</p>
                <div className="flex justify-between">
                    <p><span className="color3">Rating:</span> {ratings}</p>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={Math.round(ratings || 0)}
                        readOnly
                    />
                </div>
                <div className="text-center">
                    <Link to={`allToys/${_id}`}><button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Details</button></Link>

                </div>            </Card>
        </div>
    );
};

export default TabViewCards;