import { Button } from "flowbite-react";


const Banner2 = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1st div */}
                <div className="bg-gradient-to-b from-sky-400 to-sky-200">
                    <div className="flex">
                        <div className="p-3 md:pt-40 text-center">
                            <h2 className="text-xl md:text-2xl text-white font-bold">Sparing Sales </h2>
                            <h1 className="text-3xl text-white font-bold">All Type of  Sports Cars 50% OFF !</h1>
                          <div className="ps-10 md:ps-28 pt-3 md:pt-6">  <Button  gradientMonochrome="pink">SHOP NOW  </Button></div>
                        </div>
                        <div className="w-96 pt-20">
                            <img className="animate-pulse" src="https://i.ibb.co/0rFP6Hj/model-car-2731662-960-720-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* 2nd div */}
                <div className="flex bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
                    <div className="p-3 md:pt-40 text-center">
                        <h2 className="text-xl md:text-2xl text-white font-bold">Sparing Sales </h2>
                        <h1 className="text-3xl  text-white font-bold">All Type of SUV Toy Cars 79% OFF !</h1>
                        <div className="ps-10 md:ps-24 pt-3 md:pt-6">  <Button >SHOP NOW  </Button></div>
                    </div>
                    <div>
                        <img className="animate-bounce"  src="https://i.ibb.co/zrWNL71/car-63930-960-720-removebg-preview.png" alt="" />
                    </div>
                </div>
                {/* 3rd div */}
                <div  className="flex bg-gradient-to-r from-sky-400 to-cyan-300">
                <div className="p-3 md:pt-40 text-center">
                        <h2 className="text-xl md:text-2xl text-white font-bold">Sparing Sales </h2>
                        <h1 className="text-3xl  text-white font-bold">All Type of SUV Toy Cars 92% OFF !</h1>
                        <div className="ps-10 md:ps-24 pt-3 md:pt-6">  <Button  gradientMonochrome="lime" >SHOP NOW  </Button></div>
                    </div>
                    <div className="pt-10 ">
                        <img  className="animate-pulse" src="https://i.ibb.co/d2Syq34/toys-1064262-960-720-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;