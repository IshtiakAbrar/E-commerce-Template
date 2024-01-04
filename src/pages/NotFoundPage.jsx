import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const NotFoundPage = () => {
    return (
        <>

            <Navbar/>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-4">404 - Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-800 transition duration-150 ease-in-out"
                >
                    Return to Homepage
                </Link>
            </div>
        <Footer/>
        </>
    );
};

export default NotFoundPage;
