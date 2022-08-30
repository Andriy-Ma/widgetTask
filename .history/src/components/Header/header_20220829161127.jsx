import React from 'react';
import Icon from './logo-generic';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.nameOfMenu} id="myTopnav">
        <a href="#home" className={styles.logo}>
          <Icon/>
        </a>
        <a href="#news">News</a>
        <a href="#contact" className={styles.logo}>Contact</a>
        <a href="#about">About</a>
    </div>
  )
}

export default Header;