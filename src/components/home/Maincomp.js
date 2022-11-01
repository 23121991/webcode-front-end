import React, { useEffect } from 'react';
import Banner from './Banner';
import "./home.css";
import Slide from './Slide';
import {getproducts} from "../redux/actions/action";
import {useDispatch,useSelector} from "react-redux";
import { getProducts } from '../actions/action';
//import { useEffect } from 'react';

const Maincomp = () => {
 const {products} = useSelector(state=> state);
 console.log(products);

 const dispatch = useDispatch();

 useEffect(()=>{
    dispatch(getProducts());
 },[dispatch]);



    return (
        <div className='home_section'>
            <div className="banner_part">
                <Banner />

            </div>
            <div className="slide_part">
                <div className="left_slide">
                    <Slide title="Deal Of The Day" products={products} />
                </div>
                <div className="right_slide">
                    <h4>Festive latest launches</h4>
                    <img src="https://tricksrecharge.com/wp-content/uploads/2022/10/IMG_20221022_003634-300x286.webp" alt="" />
                    <a href="#">see More</a>
                </div>
            </div>
            <Slide title="Today's deal" products={products} />
            <div className="center_img">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Pantry/MARCH_2020/SVD_Teaser/Desktop_Teaser_Header.jpg" alt="" />
            </div>
            <Slide title="Best sellers" products={products} />
            <Slide title="Upto 50% off" products ={products} />
        </div>
    )
}

export default Maincomp;