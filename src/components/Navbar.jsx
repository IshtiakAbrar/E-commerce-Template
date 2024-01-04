// eslint-disable-next-line no-unused-vars
import React from 'react';
import {NavLink} from "react-router-dom";
import ReviewsPage from "../pages/ReviewPage.jsx";

const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/*######################for phone########################*/}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                            <li className="hover:bg-gray "><NavLink to={"/"} className="hover:bg-gray-500">Home</NavLink></li>
                            <li>
                                <summary  className="hover:bg-gray-500">Required Pages</summary>
                                <ul className="p-2">
                                    <li><NavLink to={"/products"} className="hover:bg-gray-500">Product Page</NavLink></li>
                                    <li><NavLink to={"/cart"} className="hover:bg-gray-500">Cart</NavLink></li>
                                    <li><NavLink to={"/checkout"} className="hover:bg-gray-500">Checkout Page</NavLink></li>
                                    <li><NavLink to={"/thankyou"} className="hover:bg-gray-500">Thank You Page</NavLink></li>
                                    <li><NavLink to={"/notfound"} className="hover:bg-gray-500">404! Page</NavLink></li>
                                    <li><NavLink to={"/faq"} className="hover:bg-gray-500">FAQ Page</NavLink></li>
                                    <li><NavLink to={"/review"} className="hover:bg-gray-500">Review Page</NavLink></li>
                                    <li><NavLink to={"/search"} className="hover:bg-gray-500">Search Result</NavLink></li>
                                    <li><NavLink to={"/privacy&terms"} className="hover:bg-gray-500">Terms&Privacy</NavLink></li>
                                    <li><NavLink to={"/registration"} className="hover:bg-gray-500">Registration</NavLink></li>
                                    <li><NavLink to={"/blog"} className="hover:bg-gray-500">Blog Page</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to={"/contact"} className="hover:bg-gray-500">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <NavLink to={"/"} className="btn btn-ghost text-xl">TechZone</NavLink>
                </div>
                {/*##############For large screen##############*/}

                <div className="navbar-center hidden lg:flex bg-black">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><NavLink to={"/"} className="hover:bg-gray-500">Home</NavLink></li>
                        <li>
                            <details>
                                <summary className="hover:bg-gray-500">Required Pages</summary>
                                <ul className="p-2 bg-black  z-[1]">    {/*z-1 solves unclickable problem due to relative css*/}
                                    <li><NavLink to={"/products"} className="hover:bg-gray-500">Product Page</NavLink></li>
                                    <li><NavLink to={"/cart"} className="hover:bg-gray-500">Cart</NavLink></li>
                                    <li><NavLink to={"/checkout"} className="hover:bg-gray-500">Checkout Page</NavLink></li>
                                    <li><NavLink to={"/thankyou"} className="hover:bg-gray-500">Thank You Page</NavLink></li>
                                    <li><NavLink to={"/notfound"} className="hover:bg-gray-500">404! Page</NavLink></li>
                                    <li><NavLink to={"/faq"} className="hover:bg-gray-500">FAQ Page</NavLink></li>
                                    <li><NavLink to={"/review"} className="hover:bg-gray-500">Review Page</NavLink></li>
                                    <li><NavLink to={"/search"} className="hover:bg-gray-500">Search Result</NavLink></li>
                                    <li><NavLink to={"/privacy&terms"} className="hover:bg-gray-500">Terms&Privacy</NavLink></li>
                                    <li><NavLink to={"/registration"} className="hover:bg-gray-500">Registration</NavLink></li>
                                    <li><NavLink to={"/blog"} className="hover:bg-gray-500">Blog Page</NavLink></li>
                                </ul>
                            </details>

                        </li>


                        <li><NavLink to={"/contact"} className="hover:bg-gray-500">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button className="btn btn-ghost btn-circle hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-success">Sign in</button>
                    <button className="btn btn-outline btn-accent">Sign up</button>
                </div>
            </div>


        </div>
    );
};

export default Navbar;
