import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footers from "../Pages/Shared/Footers/Footers";





const Main = () => {
    return (
        <>
        <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </>
    );
};

export default Main;