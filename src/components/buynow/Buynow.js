import { Divider } from '@mui/material';
import React from 'react';
import Option from './Option';
import Right from './Right';
import Subtotal from './Subtotal';
import "./buynow.css";

const Buynow = () => {
  return <div className='buynow_section'>
    <div className='buynow_container'>
      <div className="left_buy">
        <h1>Shopping Cart</h1>
        <p>Select all items</p>
        <span className='left_buy'>Price</span>
        <Divider />
        <div className="item_container">
          <img src="" alt="" />
          <div className="item_details">
            <h3>Molife Sense 500 Smartwatch (Black Strap, Freesize)</h3>

            <h3>Smart Watches</h3>
            <h3 className='differentprice'>₹4049.00</h3>
            <p className='unusall'>Usually dispatched in 8 days.</p>
            <p>Eligible for Free Shipping</p>
            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px_2x._CB485942108_.png" alt="" />
            <Option />

          </div>
          <h3 className='item_price'>₹4049.00</h3>

        </div>
        <Divider />
        <Subtotal />

      </div>
<Right/>
    </div>
  </div>;

};

export default Buynow;