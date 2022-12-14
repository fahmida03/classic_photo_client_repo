import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className=''>
             <div className='mx-auto container'>
            <div className="navbar  bg-emerald-50 my-3 shadow-lg py-3 rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/services"}>Services</Link></li>
                                {
                                    user?.uid ? <>
                                        <li><Link to={'/service'}>Add Service</Link></li>
                                        <li><Link to={'/myreview'}>My Review</Link></li>
                                        <li><Link to={'/blog'}>Blog</Link></li>

                                    </> :
                                        <li><Link to={'/blog'}>Blog</Link></li>
                                }

                    </ul>
                    </div>
                    <Link to={'/home'} className="btn btn-ghost normal-case text-xl">Classic Photo</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    <li><Link to={"/services"}>Services</Link></li>
                                {
                                    user?.uid ? <>
                                        <li><Link to={'/service'}>Add Service</Link></li>
                                        <li><Link to={'/myreview'}>My Review</Link></li>
                                        <li><Link to={'/blog'}>Blog</Link></li>

                                    </> :
                                        <li><Link to={'/blog'}>Blog</Link></li>
                                }
                    </ul>
                </div>
                <div className="navbar-end">
                        {
                            user?.uid ? <button onClick={handleLogOut} className="btn btn-outline btn-accent">LOGOUT</button>
                                
                                :  <Link to={"/login"}><button className="btn btn-outline btn-accent">LOG IN</button></Link>
                               
                    }
                </div>
            </div>
        </div>
       </div>
    );
};

export default Header;