import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { googleSignIn } = useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

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
        .then(result=>{
            const user=result.user;
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch(error => console.log(error))
    }

    return (

        <div className="container mx-auto py-10">
            <form onSubmit={handleLogin}>
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
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
            <div>
                <Button onClick={handleGoogleLogIn}
                    color="gray"
                    pill={true}
                >
                    Gray
                </Button>
            </div>
        </div>
    )
}

export default Login;