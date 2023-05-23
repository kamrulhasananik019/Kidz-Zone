

const Gallery = () => {
    return (
        <div className="my-5 md:my-20">
            <div className="text-center py-5 ">
                <h1 className=" text-3xl text-[#5145CD] md:text-5xl">Our New Collections Gallery  </h1>
                <p className=" text-2xl text-[#C7D2FE] py-2">Your Dream Cars In Our Collection</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img data-aos="flip-left" className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1550256662-c6adff40f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=680&q=80" alt="" />
                    </div>
                    <div>
                        <img data-aos="flip-left" className="h-full max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2016/10/20/06/00/fiat-1754723_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="flip-left"className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1508112669284-33e37093fc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img data-aos="zoom-in" className="h-full max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2020/04/24/12/54/model-car-5086785_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="zoom-in" className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1549827441-6adb9f843a35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                    <div>
                        <img data-aos="zoom-in" className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1497483996262-df5caae87573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <div>
                        <img data-aos="zoom-in" className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1538671396584-ac87e3edeb60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=672&q=80" alt="" />
                    </div>
                    <div>
                        <img data-aos="zoom-in" className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1566207962290-9e3cc51f4199?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1063&q=80" alt="" />
                    </div>
                    <div>
                        <img data-aos="zoom-in"className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1616850508384-8a4078bda000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>
                </div>
                <div className="grid gap-3">
                    <div>
                        <img data-aos="zoom-in" className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2016/03/27/20/00/car-1284040_640.jpg" alt="" />
                    </div>
                    <div>
                        <img data-aos="zoom-in" className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1546464676-9a2775a6e2f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80" alt="" />
                    </div>
                    <div>
                        <img data-aos="zoom-in" className="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2015/11/16/15/57/fire-1045906_960_720.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;