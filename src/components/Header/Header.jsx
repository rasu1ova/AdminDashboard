import React from 'react'
import LogoLight from '../../img/logo-light.png'

function Header({name, usAv}) {
  return (
    <header>
        <nav>
            <div class="search">
                <i class="bi bi-search"></i>
                <input type="search" placeholder='Search'/>
            </div>
            <div class="bell">
                <i class="bi bi-bell-fill"></i>
            </div>
            <div class="name">
              {name}
            </div>
            <div className="userAvatar">
              <img src={usAv} alt="there is a user's avatar" />
            </div>
        </nav>
    </header>
  )
}

export default Header;