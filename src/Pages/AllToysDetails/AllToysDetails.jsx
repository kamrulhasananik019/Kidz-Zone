import CountUp from 'react-countup';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from "react-router-dom";

const AllToysDetails = () => {
    const details = useLoaderData();
    const { picture, ratings, sellerName, sellerEmail, name, quantity, description, price } = details;
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Toy Details</title>
            </Helmet>
            <div className='md:flex gap-10'>
                <div>
                    <img data-aos="zoom-out" className="w-full h-auto max-w-xl rounded-3xl lg:mt-8 mt-4 mx-auto" src={picture} alt="image description" />
                </div>          
                 <div className=" text-[#5149D2] mt-8 ms-3 lg:ms-0">
                    <p className="lg:text-4xl color3">{sellerName}</p>
                    <p className="lg:text-2xl">{sellerEmail}</p>
                    <p className="lg:text-xl text-[#C7D2FE]">{description}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-4 mt-7 lg:mt-12">
                <div className="bg-[#C7D2FE] text-[#5149D2] border shadow-2xl lg:p-12 p-14 rounded-lg border-gray-400 w-72 h-52 mx-auto">
                    <p className="text-lg text-gray-500">Name</p>
                    <p className="text-4xl">{name}</p>
                </div>
                <div className="bg-[#C7D2FE] text-[#5149D2] border shadow-2xl lg:p-14 p-16 rounded-lg border-gray-400 w-72 h-52 mx-auto">
                    <p className="text-lg lg:mt-4 text-gray-500">Quantity</p>
                    <p className="text-4xl"><CountUp start={0} end={quantity} delay={0}></CountUp></p>
                </div>
                <div className="bg-[#C7D2FE] text-[#5149D2] border shadow-2xl lg:p-14 p-16 rounded-lg border-gray-400 w-72 h-52 mx-auto">
                    <p className="text-lg lg:mt-4 text-gray-500">Ratings</p>
                    <p className="text-4xl"><CountUp start={0} end={ratings} delay={0} decimals={1}></CountUp></p>
                </div>
                <div className="bg-[#C7D2FE] text-[#5149D2] border shadow-2xl lg:p-14 p-16 rounded-lg border-gray-400 w-72 h-52 mx-auto">
                    <p className="text-lg lg:mt-4 text-gray-500">Price</p>
                    <p className="text-4xl">$<CountUp start={0} end={price} delay={0}></CountUp>/pc</p>

                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;