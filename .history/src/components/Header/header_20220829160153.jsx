import React from 'react';
import Icon from './logo-generic';

function Header() {
  return (
    <div class="topnav" id="myTopnav">
        <Icon/>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
  )
}

export default Header;