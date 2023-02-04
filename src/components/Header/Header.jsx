import React from 'react';
import { TfiSearch } from "react-icons/tfi";
import user from '../../img/user1.png';
import {VscBellDot} from 'react-icons/vsc';

function Header() {
  return (
    <header className='w-full p-3.5 flex justify-between items-center shadow-headShad bg-white'>
      <form>   
        <label class="relative block ">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2 ">
            <TfiSearch className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500'/>
          </span>
          <input class=" placeholder:text-slate-400 block bg-grey w-full border border-grey rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple focus:ring-purple focus:ring-1 sm:text-sm" placeholder="Search " type="text" name="search"/>
        </label>
      </form>
      <nav className='flex justify-around items-center mr-4'>
        <div class="bell mx-1">
          <VscBellDot className=''/>
        </div>
        <div class="name mx-1">
            <p>Matt Appleyard</p>
        </div>
        <div className="userAvatar mx-1">
          <img src={user} alt="there is a user's avatar" />
        </div>
      </nav>
    </header>
  )
}

export default Header;