import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const navigate=useNavigate()
    let [jsonData,setJsonData]=useState([]);

    let [total,setTotal]=useState(0);
    useEffect(() => {
        (async()=>{
            try {
                const res = await fetch("/database/Cart.json");
                const data = await res.json();
                setJsonData(data['cart']);
            }
            catch (e){
                console.error("error fetching json data",e.toString());
            }

        })()
    }, []);

    useEffect(() => {
        let totalPrice=0;
        jsonData.forEach((item)=>{
            totalPrice+=item['price']*item['quantity'];
        })
        setTotal(totalPrice);
    }, [jsonData]);
    return (
        <div className="justify-center p-8 lg:p-28">
            <h1>Your cart list Details</h1>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Color</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
            {jsonData.map((item,i)=>{
                return <tr key={i}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                            <img src={item['img']} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                            </td>
                            <td>
                                {item['title']}

                            </td>
                            <td>{item['color']}</td>
                            <td>
                                {item['quantity']}
                            </td>
                            <td>
                                {item['price']}
                            </td>
                            <th>
                                {item['price']*item['quantity']}
                            </th>

                        </tr>


            })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <th className="text-red-400">Grand Total =  </th>
                        <th className="text-red-400">{total}</th>


                    </tr>
                    </tbody>

                </table>

                <div className="flex-grow flex justify-center">
                    <button className="btn btn-success" onClick={()=>{navigate('/checkout')}}>Checkout</button>
                </div>

            </div>


            
        </div>
    );
};

export default Cart;