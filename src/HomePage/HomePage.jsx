import React from 'react'
import LogoDark from '../img/logo-dark.png';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from 'react-router-dom';

function HomePage({userColor}) {
  return (
    <div className='HomePage'>
        <div className="home__logo">
            <img src={LogoDark} alt="there is a logo" />
        </div>
        <div className="loginFormComp">
            <div className="loginForm">
                <form action="#">
                    <div className="formInp">
                        <AiOutlineUser/> 
                        <input type="email" placeholder='Username'/>
                    </div>
                    <div className="formInp">
                        <AiOutlineLock/>
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div className="formInp">
                        <input type="checkbox" />
                        <label htmlFor="checkbox ">Remember for me <Link to="" className={userColor}>Forgot password</Link></label>
                    </div>
                    <div className="formBtn">
                        <button>Log in</button>
                    </div>
                    <p>Or <Link to="" className={userColor}>register now!</Link> </p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default HomePage;