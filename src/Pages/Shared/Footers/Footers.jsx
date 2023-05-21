


const Footers = () => {
    return (
        <footer className="bg-[#EEF2FF] rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a  className="flex items-center mb-4 sm:mb-0">
                        <img src="https://i.ibb.co/jwKds7N/SL-071221-44310-19-removebg-preview.png" className="w-40 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-4xl font-semibold whitespace-nowrap "> <span className='text-[#5145CD]'>KIDS</span> <span className=' bg-clip-text text-transparent bg-gradient-to-tr from-red-600 via-violet-500 to-sky-600'>Zone</span></span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">
                <span className='text-[#5145CD]'>KIDS</span> <span className=' bg-clip-text text-transparent bg-gradient-to-tr from-red-600 via-violet-500 to-sky-600'>Zone</span>
                    </a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footers;