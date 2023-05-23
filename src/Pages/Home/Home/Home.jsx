import { Helmet } from "react-helmet";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner2/Banner2";
import Gallery from "../../Gallery/Gallery";


import TabViwe from "../../TabViwe/TabViwe";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    KIDS Zone | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <TabViwe></TabViwe>
            <Banner2></Banner2>
            <Gallery></Gallery>

        </div>
    );
};

export default Home;