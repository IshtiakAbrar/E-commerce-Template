// eslint-disable-next-line no-unused-vars
import React from 'react';

const Contact = () => {
    return (

            <div className="p-16 lg:p-28 bg-emerald-100 w-full">
                <h2 className="text-3xl font-semibold mb-4 text-red-400">Contact Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="mt-2 shadow-md transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 hover:bg-[coral] duration-300 w-fit bg-[tomato] text-gray-600 rounded-2xl p-2">
                        <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                        <p>
                            If you have any questions or need assistance with your order, our
                            customer support team is here to help.
                        </p>
                        <p className="mt-2">
                            Email: <a href="mailto:support@techzone.com">support@techzone.com</a>
                        </p>
                    </div>

                    <div className="mt-2 shadow-md bg-[tomato] text-gray-600 rounded-2xl transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 hover:bg-[coral] duration-300 w-fit  p-2">
                        <h3 className="text-xl font-semibold mb-2 ">Business Inquiries</h3>
                        <p>
                            For business-related inquiries, partnerships, or collaboration
                            opportunities, please contact us.
                        </p>
                        <p className="mt-2">
                            Email: <a href="mailto:business@techzone.com">business@techzone.com</a>
                        </p>
                    </div>
                </div>

                <div className="mt-8 shadow-md bg-[tomato] text-gray-600 rounded-2xl transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 hover:bg-[coral] duration-300 w-fit  p-2">
                    <h3 className="text-xl font-semibold mb-2 ">Visit Our Office</h3>
                    <p>
                        Feel free to visit our office during business hours. Our address :
                    </p>
                    <p className="mt-2">
                        123 Main Street, Chittagong port, Chittagong.
                    </p>
                </div>
            </div>
    );
};

export default Contact;