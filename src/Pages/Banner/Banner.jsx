import { AiOutlineWechat } from 'react-icons/ai';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { RiVisaFill } from 'react-icons/ri';
import { FaShippingFast } from 'react-icons/Fa';

const Banner = () => {
    return (
        <div >
            <div className=" lg:grid grid-cols-12 gap-5">
                {/* 1st div */}
                <div className="col-span-8 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r grid grid-cols-1 md:grid-cols-2">
                    <div className="md:ps-6 md:py-48" >
                        <h1 className="px-3 text-3xl md:text-6xl font-bold text-white">Discover a World of Wonder and Play at KIDS ZONE !</h1>
                        <p className="px-3 text-xl md:py-5 text-white font-semibold">
                            Welcome to our vibrant world of toys, where creativity knows no bounds! The Toy Page Banner is not just a collection of products; its a celebration of the magic of play.  </p>
                    </div>
                    <div className='mt-48'>
                        <img  className='animate-bounce' src="https://i.ibb.co/TBZr9Kk/stormtrooper-2296199-640-removebg-preview.png" alt="" />
                    </div>
                </div>
                <div className="col-span-4 grid gap-5">
                    {/* 2nd div */}
                    <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 grid grid-cols-1 md:grid-cols-2">
                        <div className="md:mt-28 p-2">
                            <h1 className="text-3xl text-white">Igniting Imagination and Adventure!</h1>
                            <p className="text-white">Immerse yourself in a captivating universe of toy.</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/RDQmJgw/batman-1367730-640-removebg-preview.png" alt="" />
                        </div>
                    </div>
                    {/* 3rd div */}
                    <div className="  bg-gradient-to-r from-red-400 to-red-500 grid grid-cols-1 md:grid-cols-2">
                        <div className="md:mt-28 p-2">
                            <h1 className="text-2xl text-white">Unlock the Joy of Play  Where Adventure Begins!</h1>
                            <p className="text-white font-semibold py-2">Step into a world filled with toys that will ignite your childs imagination </p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/tPqJmGj/autos-2060420-640-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:flex ps-14  justify-around md:mt-10 bg-slate-300 py-20">
                <div className="flex mb-8 ">
                    <div>
                        <h1 className='text-6xl text-orange-400 px-3'><AiOutlineWechat></AiOutlineWechat></h1>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">SUPPORT 24/7</h1>
                        <p className="font-semibold">Delicated 24/7 Support</p>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-orange-400 text-5xl'><BsFillBoxSeamFill></BsFillBoxSeamFill></h1></div>
                    <div>
                        <h1 className="text-xl font-bold">
                            EASY RETURNS
                        </h1>
                        <p className="font-semibold">Shop With Confidence</p>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-orange-400 text-6xl'><RiVisaFill></RiVisaFill></h1></div>
                    <div><h1 className="text-xl font-bold">CARD PAYMENT</h1>
                        <p className="font-semibold">12 Months Installments</p>
                    </div>
                </div>
                <div className="flex mb-8">
                    <div><h1 className='px-3 text-orange-400 text-6xl'><FaShippingFast></FaShippingFast></h1></div>
                    <div><h1 className="text-xl font-bold">FREE SHIPPING</h1>
                        <p className="font-semibold">Capped at $50 per order</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;