import React, { useState } from 'react';
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import {useNavigate} from "react-router-dom";

const CheckoutPage = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        creditCard: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic for handling the checkout submission here
        console.log('Form submitted:', formData);
        // Optionally, you can reset the form fields after submission
        setFormData({
            fullName: '',
            email: '',
            address: '',
            creditCard: '',
        });
    };

    return (
        <>
            <Navbar/>

        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-8">Checkout</h2>
            <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                        Address
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="creditCard" className="block text-sm font-medium text-gray-600">
                        Credit Card
                    </label>
                    <input
                        type="text"
                        id="creditCard"
                        name="creditCard"
                        value={formData.creditCard}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={()=>{navigate('/thankyou')}}>
                    Checkout
                </button>
            </form>
        </div>

            <Footer/>
        </>
    );
};

export default CheckoutPage;
