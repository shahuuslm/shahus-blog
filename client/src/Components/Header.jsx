import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom"
import { RiSearch2Line } from "react-icons/ri";
import { FaMoon } from "react-icons/fa"

const Header = () => {
    const path = useLocation().pathname;
    return ( 
        <div>
            <Navbar className="border-b-2">
                <Link to='/' className='self-center whitespace-nowraptext-sm sm:text-xl font-semibold dark:text-white'>
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Shahus</span>
                    Blog
                </Link>
                <form>
                    <TextInput
                        type="text"
                        placeholder="Search..."
                        rightIcon={RiSearch2Line}
                        className="hidden lg:inline"
                    />
                </form>
                <Button className="lg:hidden w-12 h-10" color="gray" pill>
                    <RiSearch2Line />
                </Button>
                <div className="flex gap-2 md:order-2" >
                    <Button className="w-12 h-10 hidden lg:inline" color="gray" pill>
                        <FaMoon />
                    </Button>
                    <Link to={'/signIn'} >
                        <Button gradientDuoTone="purpleToBlue" outline>
                            Sign In
                        </Button>
                    </Link>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active = {path === '/'} as={'div'}>
                        <Link to={'/'} className="font-semibold text-lg">Home</Link>
                    </Navbar.Link>
                    <Navbar.Link active = {path === '/projects'} as={'div'}>
                        <Link to={'/projects'} className="font-semibold text-lg">Projects</Link>
                    </Navbar.Link>
                    <Navbar.Link active = {path=== '/about'} as={'div'}>
                        <Link to={'/about'} className="font-semibold text-lg">About</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;