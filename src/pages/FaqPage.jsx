import React, { useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const FaqPage = () => {
    const faqData = [
        {
            question: 'What is the purpose of this website?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
        },
        {
            question: 'How do I create an account?',
            answer: 'To create an account, click on the "Sign Up" button and fill out the required information...',
        },
        {
            question: 'Can I reset my password?',
            answer: 'Yes, you can reset your password by clicking on the "Forgot Password" link on the login page...',
        },
        // Add more FAQ items as needed
    ];

    const [activeIndices, setActiveIndices] = useState([]);

    const toggleAccordion = (index) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter((i) => i !== index));
        } else {
            setActiveIndices([...activeIndices, index]);
        }
    };

    return (
        <>
            <Navbar/>

            <div className="container mx-auto p-8">
                <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="max-w-lg mx-auto">
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-4 bg-white rounded-md shadow-md">
                            <div
                                className={`flex items-center justify-between p-4 cursor-pointer border-b ${
                                    activeIndices.includes(index) ? 'border-blue-500' : 'border-gray-300'
                                }`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3
                                    className={`text-lg font-medium ${
                                        activeIndices.includes(index) ? 'text-blue-500' : 'text-gray-800'
                                    }`}
                                >
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-6 h-6 transition-transform transform ${
                                        activeIndices.includes(index) ? 'rotate-90' : 'rotate-0'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {activeIndices.includes(index) && (
                                <div className="p-4">
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
            </>
    );
};

export default FaqPage;
