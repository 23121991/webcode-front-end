import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./cart.css";


const Cart = () => {

    const id = useParams("");
    //console.log(id);

    const [inddata, setInddata] = useState([]);
    console.log(inddata);

    const getinddata = async () => {
        const res = await fetch(`/getproductsone/${e.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        //console.log(data);


        if (res.status !== 201) {
            console.log("no data available");
        } else {
            console.log("getdata");
            setInddata(data);
        }

    }

    useEffect(() => {
        getinddata();

    }, [id]);

    return <div className='cart_section'>
        {inddata && Object.keys(inddata).length &&
            <div className="cart_container">
                <div className="left_cart">
                    <img src={inddata.detailUrl} alt="cart_img" />
                    <div className="cart_btn">
                        <button className="cart_btn1">Add to cart</button>
                        <button className="cart_btn2">Buy Now</button>

                    </div>

                </div>
                <div className="right_cart" >

                    <h3>{inddata.title.shortTitle}</h3>
                    <h4>{inddata.title.longTitle}</h4>
                    <Divider />
                    <p className="mrp">M.R.P. : ₹{inddata.price.mrp}</p>
                    <p>Deal Of The Day: <span style={{ color: "#B12704" }}></span>₹{inddata.price.cost}</p>
                    <p>you save : : <span style={{ color: "#B12704" }}>₹{inddata.price.mrp - inddata.price.cost}({inddata.price.discount})</span></p>
                    <div className="discount_box">
                        <h5>Discount : <span style={{ color: "#111" }}>{inddata.price.discount}</span></h5>
                        <h4>Delivery<span style={{ color: "#111", fontweight: 600 }}>Oct 8 -21</span>Details</h4>
                        <p>Fastest delivery: <span style={{ color: "#111", fontweight: 600 }}></span>Tomorrow 11AM</p>
                        <p className="description">About the Item : <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}>{inddata.description}</span> </p>




                    </div>


                </div>


            </div>
}
    </div>

};
export default Cart