import React from 'react';
import logo from 'logo-generic.svg'

function Header() {
  return (
    <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
            <img src={logo} alt="logo" />
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
  )
}

export default Header;