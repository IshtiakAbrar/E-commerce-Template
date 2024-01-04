import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BlogPage from "./BlogPage.jsx";

const ThankYouPage = () => {
    return (
        <>
            <Navbar/>

            <div className="container mx-auto p-8 text-center lg:py-36 py-10">
                <h2 className="text-3xl font-bold mb-8">Thank You for Your Purchase!</h2>
                <p className="text-gray-600 mb-4">
                    Your order has been successfully processed. We appreciate your business!
                </p>
                <p className="text-gray-600 mb-8">An email confirmation has been sent to your provided email address.</p>
                <Link to="/" className="text-green-500 hover:underline">
                    Return to Homepage
                </Link>
            </div>
        <Footer/>
        </>
    );
};

export default ThankYouPage;
