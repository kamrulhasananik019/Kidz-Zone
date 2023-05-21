import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blogs from "../Pages/Bolgs/Blogs";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Error from "../Pages/Error/Error";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path:'blogs',
                element:<PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path:'addtoys',
                element:<AddToys></AddToys>
            }
            ,
            {
                path:'mytoys',
                element:<MyToys></MyToys>
            }
        ]
    },
]);
export default router;