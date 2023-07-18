import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
function Header() {
  return (
    <nav className='header'>
        <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon_logo"
        />
        </Link>
        input.header__searchInput
        
        
    </nav>
  )
}

export default Header