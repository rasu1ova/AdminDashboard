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
                  <h1>Dashboard</h1>
                </div>
                <div class="menu__item border-b-2 p-4 flex items-center gap-2 hover:text-[#38bdf8] transition-all ease-in">
                  <div className="menu__icon"><SlBasket/></div>
                  <h1>Dashboard</h1>
                </div>
                <div class="menu__item border-b-2 p-4 flex  items-center gap-2 hover:text-[#38bdf8] transition-all ease-in">
                  <div className="menu__icon"><RxPerson/></div>
                  <h1>Account</h1>
                </div>
                <div class="menu__item border-b-2 p-4  flex  items-center gap-2 hover:text-[#38bdf8] transition-all ease-in">
                  <div className="menu__icon"><AiOutlineSetting/></div>
                  <h1>Settings</h1>
                </div>
                <div className="support__div p-4 border-b-2">
                  <h1 className='text-grey'>Support</h1>
                  <div className="support__div--chat p-4 flex items-center gap-2 hover:text-[#38bdf8] transition-all ease-in ">
                    <div className="menu__icon"><AiFillWechat/></div>
                    <h1>Chat</h1>
                  </div>
                  <div className="support__div--faq p-4 flex items-center gap-2 hover:text-[#38bdf8] transition-all ease-in">
                    <div className="menu__icon"><FaQuestionCircle/></div>
                    <h1>Faq</h1>
                  </div>
                </div>
            </div>
            <div className="mode absolute bottom-16 left-8">
              <button className='p-4 rounded-lg border-black border '>Dark Mode</button>
            </div>
          </aside>
          <section className='w-11/12 bg-grey'>
            <Header/>
            <main>
              <h1>main part</h1>
            </main>
          </section>
    </div>  
  )
}

export default Main;