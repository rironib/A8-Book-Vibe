import {Link, NavLink} from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
    return (
        <header className='w-11/12 max-w-[1280px] mx-auto navbar pt-4 px-0 pb-8 bg-base-100'>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost px-0 pr-2 lg:hidden">
                        <TiThMenu />
                    </div>
                    <ul tabIndex="0"
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow-lg font-medium bg-base-100 rounded-box w-52 space-y-3">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/booklist'>Listed Books</NavLink>
                        <NavLink to='/statistics'>Pages to Read</NavLink>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-2xl lg:text-3xl font-bold px-0">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold flex gap-4 items-center">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/booklist'>Listed Books</NavLink>
                    <NavLink to='/statistics'>Pages to Read</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex gap-2 lg:gap-4">
                <Link to='/login' className="btn bg-[#23BE0A] text-white lg:text-lg">Login</Link>
                <Link to='/signup' className="btn bg-[#59C6D2] text-white lg:text-lg">Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;
