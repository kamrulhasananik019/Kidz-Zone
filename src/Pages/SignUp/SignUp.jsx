import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


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

            <div className="text-center my-14">
                <h1 className="text-2xl font-extrabold py-5">welcome</h1>
                <h1 className="text-5xl font-semibold">
                    <span className='text-orange-400'>KIDS</span> <span className='text-lime-300'>ZONE</span>
                </h1>
            </div>
            <div className="container mx-auto grid grid-cols-col md:grid-cols-2">
                <div className="border-4 rounded-lg border-emerald-300">
                    <img src="https://i.ibb.co/Q6bDC62/Untitled-design-1.png" alt="" />
                </div>
                <div className="container w-2/3 border-4 border-emerald-300 rounded-lg p-10" >
                    <h1 className="text-2xl text-center text-orange-400">Register Now!</h1>
                    <form onSubmit={handleSignup}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name
                            </label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="your name"
                                required
                            />
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
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;