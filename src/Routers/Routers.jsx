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
import AllToys from "../Pages/AllToys/AllToys";
import UpdateToys from "../Pages/MyToys/UpdateToys/UpdateToys";
import AllToysDetails from "../Pages/AllToysDetails/AllToysDetails";


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
                element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
            }
            ,
            {
                path:'mytoys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'alltoys',
                element:<AllToys></AllToys>
            },
            {
                path:"/allToys/:id",
                element:<PrivateRoute><AllToysDetails></AllToysDetails></PrivateRoute>,
                loader:({params})=> fetch(`https://ass11-server-two.vercel.app/allToys/${params.id}`)
            },
            {
            path:'myToys/:id',
            element:<UpdateToys></UpdateToys>,
            loader:({params})=>fetch(`https://ass11-server-two.vercel.app/myToys/${params.id}`)
            },
        
        ]
    },
]);
export default router;