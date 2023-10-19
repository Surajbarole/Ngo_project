import React, { useState } from 'react'
import logor from "../images/—Pngtree—8 year anniversary vector template_4012904.png"
import { Link,NavLink } from 'react-router-dom'
import "./nav.css"
import Logo from "../images/NAMAN LOGO.jpg"
function NavPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className='nav'>
        <ul>
        <img className='logo-main' src={Logo} alt='logo'/>
            <NavLink className="navBar" to="/" onClick={toggleMenu}> HOME</NavLink>
            <NavLink className="navBar" to="/about" onClick={toggleMenu}>ABOUT US</NavLink>
            <NavLink className="navBar" to="/projects">OUR PROJECTS</NavLink>
            <NavLink className="navBar" to="/governance">GOVERNANCE</NavLink>
            <NavLink className="navBar" to="/Contact">CONTACT US</NavLink>
            <NavLink className="navBar navBtn" to="">DONATE NOW</NavLink>
        </ul>
        <img className='right-logo' src={logor} alt='logo'/>

      </div>
    </>
  )
}

export default NavPage
