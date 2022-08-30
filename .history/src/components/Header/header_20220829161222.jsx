import React from 'react';
import Icon from './logo-generic';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.nameOfMenu} id="myTopnav">
        <div className={styles.logo}>
          <Icon/>
        </div>
        <a href="#news">News</a>
        <a href="#contact" className={styles.logo}>Contact</a>
        <a href="#about">About</a>
    </div>
  )
}

export default Header;