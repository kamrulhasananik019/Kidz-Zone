import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";





const Main = () => {
    return (
        <>
        <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Main;