import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-red-900 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li className='text-white'><Link to='/home'>Home</Link></li>
                        <li className='text-white'><a>Services</a></li>
                        <li className='text-white'><Link to='/blog'>Blog</Link></li>
                        <li className='text-white'><a>About Us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-sans">Classic Photo</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-white'><Link to='/home'>Home</Link></li>
                    <li className='text-white'><Link to='/service'>Services</Link></li>
                    <li className='text-white'><Link to='/blog'>Blog</Link></li>
                    <li className='text-white'><a>About Us</a></li>
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <a className='text-white'><Link to='/login'>LogIn</Link></a>
            </div>
        </div>
    );
};

export default Header;