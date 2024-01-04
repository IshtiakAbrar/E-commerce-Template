import React, {useEffect} from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const BlogPage = () => {
    useEffect(() => {
        (async()=>{
            try {
                const res = await fetch("/database/Product.json");
                const data = await res.json();
                setJsonData(data['products']);
            }
            catch (e){
                console.error("error fetching json data",e.toString());
            }

        })()
    }, []);

    const blogPosts = [
        {
            title: 'Getting Started with React',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
            date: 'January 1, 2022',
            img:'/images/p1.jpeg',
        },
        {
            title: 'JavaScript Best Practices',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...',
            date: 'February 15, 2022',
            img:'/images/p2.jpeg',
        },
        {
            title: 'Introduction to CSS Grid',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...',
            date: 'March 10, 2022',
            img:'/images/p3.jpeg',
        },
        // Add more blog posts as needed
    ];

    return (
        <>
            <Navbar/>

        <div className="container mx-auto p-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Latest Blog Posts</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
                        <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-2">{post.date}</p>
                            <p className="text-gray-800">{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <Footer/>
            </>
    );
};

export default BlogPage;
