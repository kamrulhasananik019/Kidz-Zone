import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";





const Main = () => {
    return (
        <div>
           <div className="container mx-auto"> <Header></Header></div>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;