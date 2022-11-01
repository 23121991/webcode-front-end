import React from 'react'
import "./footer.css"

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);


    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Get to Know Us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Cares</p>

                </div>
                <div className="footr_details_one">
                    <h3>Connect With Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>


                </div>
                <div className="footr_details_one forres">
                    <h3>Make Money With Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Make Money With Us</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>

            </div>
            <div className="lastdetails">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJMccQfz4rY9F43WmyOW-I8CeE8p6QWwrTBg&usqp=CAU" alt="" />
                <p>Conditions Of Use & Sale &nbsp; &nbsp; &nbsp;   Privacy Notice &nbsp; &nbsp; &nbsp;   Interest-Based Ads &nbsp; &nbsp; &nbsp;   @ 1996-2022, Amazon.com,Inc. or its affilities</p>

            </div>
        </footer>
    )
}

export default Footer