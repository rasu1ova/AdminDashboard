import React from 'react'
import Header from '../Header/Header'

function Main() {
  return (
    <div class="conatainer">
          <aside>
            <div class="menu-icon">
              <i class="bi bi-list"></i>
            </div>
            <div className="logo">
                <img src={LogoLight} alt="there is a logo" />
            </div>
            <div class="menu">
                <div class="menu__item">
                    
                </div>
            </div>
          </aside>
          <section>
            <Header/>
          </section>
    </div>  
  )
}

export default Main