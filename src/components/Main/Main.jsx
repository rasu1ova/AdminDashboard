import React from 'react'
import Header from '../Header/Header'
import LogoDark from '../../img/logo-dark.png'
import './Main.scss'
import {SlBasket} from "react-icons/sl"
import {AiFillWechat, AiOutlineSetting} from "react-icons/ai"
import {FaQuestionCircle} from "react-icons/fa"
import {RxPerson} from "react-icons/rx"
import {ImStatsDots} from "react-icons/im"


function Main() {
  return (
    <div class="conatainer flex ">
          <aside className='w-52 h-screen '>
            <div class="menu-icon hidden">
              <i class="bi bi-list"></i>
            </div>
            <div className="logo bg-grey p-4 flex justify-center items-center ">
                <img src={LogoDark} alt="there is a logo" />
            </div>
            <div class="menu  flex flex-col">
                <div class="menu__item border-b-2 p-4 flex  items-center gap-2  hover:text-[#38bdf8] transition-all ease-in">
                  <div className="menu__icon"><ImStatsDots/></div>
                  <h2>Dashboard</h2>
                </div>
                <div class="menu__item border-b-2 p-4 flex items-center gap-2 hover:text-[#38bdf8] transition-all ease-in">
                  <div className="menu__icon"><SlBasket/></div>
                  <h2>Dashboard</h2>
                </div>
                <div class="menu__item border-b-2 p-4 flex  items-center gap-2 hover:text-[#38bdf8] transition-all ease-in">
                  <div className="menu__icon"><RxPerson/></div>
                  <h2>Account</h2>
                </div>
                <div class="menu__item border-b-2 p-4  flex  items-center gap-2 hover:text-[#38bdf8] transition-all ease-in">
                  <div className="menu__icon"><AiOutlineSetting/></div>
                  <h2>Settings</h2>
                </div>
                <div className="support__div p-4 border-b-2">
                  <h2 className='text-grey'>Support</h2>
                  <div className="support__div--chat p-4 flex items-center gap-2 hover:text-[#38bdf8] transition-all ease-in ">
                    <div className="menu__icon"><AiFillWechat/></div>
                    <h2>Chat</h2>
                  </div>
                  <div className="support__div--faq p-4 flex items-center gap-2 hover:text-[#38bdf8] transition-all ease-in">
                    <div className="menu__icon"><FaQuestionCircle/></div>
                    <h2>Faq</h2>
                  </div>
                </div>
            </div>
            <div className="mode absolute bottom-16 left-8">
              <button className='p-4 rounded-lg border-black border '>Dark Mode</button>
            </div>
          </aside>
          <section className='w-11/12 bg-grey'>
            <Header/>
            <main className='p-8 flex justify-center '>
           
              <div className="main__right--chart w-5/12">
                <div className="main__right--hello flex justify-center items-center shadow-headShad w-full gap-4 p-4 bg-green rounded-lg">
                  <div className="main__right--info w-9/12 gap-4">
                    <h2 className='text-lg font-bold'>Welcome to your dashboard!</h2>
                    <p className='text-xs text-brown'>Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!</p>
                  </div>
                  <div className="main__right--gif">
                    <img className='w-full' src='https://cdn.animaapp.com/projects/625319d76f01a03c8be7d01a/files/dashboard-light.gif' alt="there is a dashboard's gif" />
                  </div>
                </div>
              </div>
            </main>
          </section>
    </div>
  )
}

export default Main;