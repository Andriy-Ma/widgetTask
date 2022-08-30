import React from 'react';
import {ReactComponent as ReactLogo} from './result.svg';

function Header() {
  return (
    <div class="topnav" id="myTopnav">
        <ReactLogo/>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
  )
}

export default Header;