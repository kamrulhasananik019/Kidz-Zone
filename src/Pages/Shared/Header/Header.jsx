import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Tooltip } from 'react-tooltip';
import ActiveLink from './ActiveLink/ActiveLink';
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
            logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://i.ibb.co/Q6bDC62/Untitled-design-1.png"
                    className="mr-3 h-10 lg:h-20 rounded-full"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap lg:text-3xl font-bold dark:text-white">
                    <span className='text-red-600'>KIDS</span> <span className=''>ZONE</span>
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                >
                </Dropdown>
                {
                    user ? <> <a data-tooltip-id="my-tooltip" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                        {<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                    </a> <button onClick={handleLogout} className='bg-stone-300 font-bold px-3 py-2 ms-2 rounded'>Logout</button></>
                        :
                        <button className='bg-stone-300 font-bold px-3 py-2 rounded'><Link to='/login'>Login</Link></button>
                }
                <Tooltip
                    id="my-tooltip"
                    content={user ? user.displayName : ""}
                    isOpen={isOpen}
                />
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <ActiveLink to='/'><span className='lg:text-2xl'>Home</span></ActiveLink>
                <ActiveLink to='/blogs'><span className='lg:text-2xl'>Blogs</span></ActiveLink>
                <ActiveLink to='/signup'><span className='lg:text-2xl'>Register</span></ActiveLink>
            </Navbar.Collapse>
        </Navbar>

    )
};

export default Header;