import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const ReviewPage = () => {
    const reviewsData = [
        {
            title: 'Amazing Product!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
            author: 'John Doe',
        },
        {
            title: 'Great Customer Service',
            description: 'The customer service team was very helpful and responsive. ...',
            author: 'Jane Smith',
        },
        {
            title: 'Successful Case Study',
            description: 'Our company saw a significant improvement after implementing this solution. ...',
            author: 'Mike Johnson',
        },
        // Add more reviews or cases as needed
    ];

    return (
        <>
        <Navbar/>
            <div className="container mx-auto p-8 lg:py-24 py-10">
                <h2 className="text-4xl font-bold mb-8 text-center">Customer Reviews and Cases</h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="bg-white rounded-md shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                            <p className="text-gray-600 mb-4">{review.description}</p>
                            <p className="text-gray-800 font-semibold">- {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>

        </>
    );
};

export default ReviewPage;
