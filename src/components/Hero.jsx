import React from 'react';

const Hero = () => {
    return (
        <div>


            <div className="min-h-screen carousel w-full bg-[#14b8a6]">
                <div id="slide1" className="carousel-item relative w-full  bg-yellow-500 justify-center">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="images/p1.jpeg" className="max-w-lg  rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome to TechZone!</h1>
                            <p className="py-6">We provide the best products all over the internet. One stop solution for all your needs. All you need is just a click away!</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative bg-[#990000] text-white w-full justify-center">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="images/n7.jpeg" className="max-w-sm rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome to TechZone!</h1>
                            <p className="py-6">We provide the best products all over the internet. One stop solution for all your needs. All you need is just a click away!</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="bg-[#f06f59] carousel-item relative w-full justify-center">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="images/n11.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome to TechZone!</h1>
                            <p className="py-6">We provide the best products all over the internet. One stop solution for all your needs. All you need is just a click away!</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full justify-center">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Welcome to TechZone!</h1>
                            <p className="py-6">We provide the best products all over the internet. One stop solution for all your needs. All you need is just a click away!</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;