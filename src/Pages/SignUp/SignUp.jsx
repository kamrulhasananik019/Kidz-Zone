import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(name, photo);
                navigate(from, { replace: true });
            })
            .then(error => console.log(error))

    };
    return (
        <div>
            <Helmet>
                <title>
                    Register

                </title>
            </Helmet>
            <div className="text-center md:my-14">
                <h1 className="text-2xl text-[#5145CD] md:text-5xl text-center font-semibold">
                    Join With Fun !
                </h1>
            </div>
            <div className="container mx-auto grid grid-cols-col md:grid-cols-2">
                <div className="border-4 md:p-20 rounded-lg border-[#5145CD]">
                    <img src="https://i.ibb.co/jwKds7N/SL-071221-44310-19-removebg-preview.png" alt="" />
                </div>
                <div className="container md:w-2/3 border-4 border-[#5145CD] rounded-lg p-3 md:p-10" >
                    <h1 className="text-2xl text-center text-[#6f8afa]">Register Now!</h1>
                    <form onSubmit={handleSignup}>
                        <div className="mb-6 ">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="your name"
                                required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Photo
                            </label>
                            <input
                                type="photo"
                                id="photo"
                                name="photo"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="your photo url"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="your password"
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
                            className="text-white bg-[#5145CD] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"                        >
                            Submit
                        </button>
                    </form>
                    <div className="py-3">
                        <hr />
                    </div>
                    <p className=" font-semibold">Already have an account ! <Link className="text-[#869bee] underline" to="/login">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;