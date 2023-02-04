import React from 'react'
import LogoDark from '../img/logo-dark.png';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./HomePage.scss";
import UserImg from "../img/user2Key.png";

function HomePage() {
  return (
    <div className='HomePage'>
        <div className="home__logo">
            <img src={LogoDark} alt="there is a logo" />
        </div>
        <div className="loginComp ">
            <div className="loginFormComp bg-white flex  rounded-lg max-w-2xl p-12 mx-auto mt-40">
                <form action="#" className='loginForm'>
                    <label class="relative block my-5">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
                        <AiOutlineUser/> 
                        </span>
                        <input id="email-address" name="email" type="email"  autoComplete="email" required  class=" focus:z-10 focus:border-indigo-500  focus:ring-indigo-500 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm" placeholder="Username" />
                    </label>
                    <label class="relative block my-5">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <AiOutlineLock/>
                        </span>
                        <input id="password" name="password" type="password" autoComplete="current-password" required class="focus:z-10 focus:border-indigo-500 focus:ring-indigo-500  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm" placeholder="Password"  />
                    </label>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  border-gray-300 rounded accent-[#694BDB] "/>
                        <label className='ml-2' htmlFor="default-checkbox">Remember for me <a href="/" className="text-purple" id='usercolor'>Forgot password</a></label>
                    </div>
                    <div className="formBtn w-full">
                        <button className='w-full hover:bg-opacity-95  bg-purple hover:bg-gray-100 font-semibold py-2 px-4 rounded shadow text-white mt-6'>Log in</button>
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