import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from "react-helmet";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('Email:', email);
        console.log('Password:', password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    };

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    return (

        <div>
<Helmet>
    <title>
     Log In
    </title>
</Helmet>
            <div>
                <h1 className="text-2xl text-[#5145CD] md:text-5xl text-center py-10 font-semibold">
                    Welcome Back !
                </h1>
            </div>
            <div className="container mx-auto grid grid-cols-col md:grid-cols-2">
                <div className="border-4 rounded-lg border-[#95a8e6]">
                    <img src="https://i.ibb.co/jwKds7N/SL-071221-44310-19-removebg-preview.png" alt="" />
                </div>
                <div className="container  p-10 md:w-2/3 border-4 border-[#95a8e6] rounded-lg">
                    <form onSubmit={handleLogin} className="p-6">
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"

                                />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-[#5145CD] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Log In
                        </button>
                    </form>
                    <p className="py-3  ps-8 font-semibold">Create an Account ! <Link className="text-[#869bee] underline" to="/signup">Register</Link></p>
                    <hr />
                    <div className="py-2  ps-10">
                        <Button onClick={handleGoogleLogIn}
                            outline={true}
                            gradientDuoTone="greenToBlue"
                            size='xl'
                            className=" text-center"
                        >
                            <FcGoogle className="text-2xl"></FcGoogle>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;