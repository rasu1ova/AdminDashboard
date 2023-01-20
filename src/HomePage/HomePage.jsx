import React from 'react'
import LogoDark from '../img/logo-dark.png';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
// import { Link } from 'react-router-dom';
import "./HomePage.scss";
import UserImg from "../img/user2Key.png";

function HomePage() {
  return (
    <div className='HomePage'>
        <div className="home__logo">
            <img src={LogoDark} alt="there is a logo" />
        </div>
        <div className="loginComp bg-white">
            <div className="loginFormComp ">
                <form action="#" className='loginForm'>
                        <div className="formInp ">
                            <AiOutlineUser/> 
                            <input type="email" placeholder='Username'/>
                        </div>
                        <div className="formInp">
                            <AiOutlineLock/>
                            <input type="password" placeholder='Password'/>
                        </div>
                        <div className="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  border-gray-300 rounded accent-[#694BDB] "/>
                            <label className='ml-2' htmlFor="default-checkbox">Remember for me <a href="/" className="text-purple" id='usercolor'>Forgot password</a></label>
                        </div>
                        <div className="formBtn">
                            <button className='bg-purple hover:bg-gray-100 font-semibold py-2 px-4 rounded shadow text-white mt-6'>Log in</button>
                        </div>
                        <p>Or <a href="/" className="text-purple" id='usercolor'>register now!</a> </p>
                </form>
                <div className="loginImg">
                    <img src={UserImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage;