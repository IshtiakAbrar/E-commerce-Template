import React, {useEffect, useState} from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const SearchResultPage = () => {
    // Simulated search results
    const [searchResults] = useState([
        { title: 'Result 1', description: 'Description for Result 1' },
        { title: 'Result 2', description: 'Description for Result 2' },
        { title: 'Result 3', description: 'Description for Result 3' },
        // Add more results as needed
    ]);

    let [jsonData,setJsonData]=useState([]);
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

    return (
       <>
       <Navbar/>
           <div className="container mx-auto p-8">
               <h2 className="text-4xl font-bold mb-8">Search Results</h2>
               {searchResults.length === 0 ? (
                   <p className="text-gray-600">No results found.</p>
               ) : (
                   <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                       {searchResults.map((result, index) => (
                           <li key={index} className="bg-white rounded-md shadow-md p-6">
                               <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                               <p className="text-gray-600 mb-4">{result.description}</p>
                               {/* Add more details or links if needed */}
                           </li>
                       ))}
                   </ul>
               )}
           </div>

           <div className="xl:w-full h-auto  mb-[5rem] lg:pb-28">



               <div className=" md:w-[25rem] leading-10 p-3 md:ml-28 md:mt-20 text-2xl lg:text-5xl">
                   <p className="text-cyan-700 font-bold">New Products</p>
               </div>

               <div className="bg-orange-500 lg:px-28 justify-center mt-[3rem] grid md:grid-cols-2 2xl:grid-cols-4 gap-16 overflow-x-auto  py-14 w-full">

                   {jsonData.map((item,i)=>{
                       return <div key={i} className="card card-compact w-96 bg-base-100 shadow-2xl">
                           <figure className=" h-[15rem]"><img src={item["img"]} alt="Shoes" /></figure>
                           <div className="card-body">
                               <h2 className="card-title">{item["title"]}</h2>
                               <p>{item["description"]}</p>
                               <div className="card-actions justify-end">
                                   <button className="btn btn-primary">Buy Now</button>
                               </div>
                           </div>
                       </div>
                   })}

               </div>
           </div>

           <Footer/>
       </>
    );
};

export default SearchResultPage;
