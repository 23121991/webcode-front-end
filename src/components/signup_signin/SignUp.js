import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""


    });
    console.log(udata);


    const adddata = (e) => {
        const { name, value } = e.target;
        setUdata(() => {
            return {
                ...udata,
                [name]: value
            }
        })



    }

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">

                    <img src="https://www.freeiconspng.com/uploads/amazon-icon-28.jpg" alt="https://www.freeiconspng.com/uploads/amazon-icon-28.jpg" />

                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign_Up</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your name</label>
                            <input type="text"
                                onChange={adddata}
                                //onChange={(e)=>setUdata({...udata,fname:e.target.value})}
                                value={udata.fname}
                                name="fname" placeholder="name is required" id="fname" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text"
                                onChange={adddata}
                                // onChange={(e)=>setUdata({...udata,fname:e.target.value})}
                                value={udata.email}
                                name="email" placeholder="email is required" id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text"
                                onChange={adddata}
                                //onChange={(e)=>setUdata({...udata,fname:e.target.value})}
                                value={udata.mobile}
                                name="mobile" placeholder="num is required" id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                onChange={adddata}
                                //onChange={(e)=>setUdata({...udata,fname:e.target.value})}
                                value={udata.password}
                                name="password" placeholder='At least 6 char' id="password" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Retype Password</label>
                            <input type="password"
                                onChange={adddata}
                                //onChange={(e)=>setUdata({...udata,fname:e.target.value})}
                                value={udata.cpassword}
                                name="cpassword" placeholder='At least 6 char' id="cpassword" />
                        </div>
                        <button className='signin_btn'>Continue</button>
                        <div className='signin_info'>

                            <p>Already have an account?</p>
                            <NavLink to="/login">Signin</NavLink>

                        </div>
                    </form>

                </div>


            </div>



        </section>
    )
}

export default SignUp