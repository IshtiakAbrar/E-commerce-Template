import React from 'react';
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const PrivacyAndTermsPage = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto p-12">
            <h2 className="text-4xl font-bold mb-8">Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
                This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
                ...
            </p>

            <h2 className="text-4xl font-bold mb-8">Terms of Use</h2>
            <p className="text-gray-600 mb-4">
                By accessing and using our website, you agree to comply with and be bound by these Terms of Use.
                ...
            </p>

            <h2 className="text-4xl font-bold mb-8">Contact Information</h2>
            <p className="text-gray-600">
                If you have any questions or concerns about our Privacy Policy or Terms of Use, please contact us at:
                <br />
                Email: info@example.com
                <br />
                Phone: (123) 456-7890
            </p>
        </div>
        <Footer/>
    </>
    );
};

export default PrivacyAndTermsPage;
