import {useEffect, useState} from 'react';

const Products = () => {
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
        <div>
            <div className="xl:w-full h-auto  mb-[5rem] lg:pb-28">



                <div className=" md:w-[25rem] leading-10 p-3 md:ml-28 md:mt-20 text-2xl lg:text-5xl">
                    <p className="text-cyan-700 font-bold">Our Products</p>
                </div>

                <div className="bg-orange-500 lg:px-28 justify-center mt-[3rem] grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-16 overflow-x-auto  py-14 w-full">

                    {jsonData.map((item,i)=>{
                        return <div key={i} className="card card-compact w-96 bg-base-100 shadow-2xl transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 duration-300">
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
        </div>
    );
};

export default Products;