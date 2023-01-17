import React from 'react'
import Logo from '../../img/logo.png'

function Header() {
  return (
    <header>
        <div class="menu-icon">
           <i class="bi bi-list"></i>
        </div>
        <div className="logo">
            <img src={Logo} alt="there is a logo" />
        </div>
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
        <nav>
            <div class="search">
                <i class="bi bi-search"></i>
                <input type="search" />
            </div>
            <div class="bell">
                <i class="bi bi-bell-fill"></i>
            </div>
            <div class="name">

            </div>
        </nav>
    </header>
  )
}

export default Header;