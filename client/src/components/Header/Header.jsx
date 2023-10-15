import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineMail, AiOutlineUser} from "react-icons/ai"
import './header.css'

const Header = () => {
  return (
    <>
        <header className = "header-container bg-slate-200">
            <nav className = "nav">
                <div className="burger-menu">
                  <GiHamburgerMenu style = {{fontSize: "2rem"}}/>
                </div>
                <ul className = "nav-links">
                  <li><AiOutlineMail style = {{fontSize: "2rem"}}/></li>
                  <li><AiOutlineUser className = "border user-icon border-slate-950 rounded-3xl" style = {{fontSize: "2rem"}}/></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header