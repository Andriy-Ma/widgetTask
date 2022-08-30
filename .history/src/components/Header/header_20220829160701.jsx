import React from 'react';
import Icon from './logo-generic';
import styles from './header.module.css';

function Header() {
  return (
    <div class="topnav" id="myTopnav">
        <a href="#home" >
          <Icon className={styles.logo}/>
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
  )
}

export default Header;