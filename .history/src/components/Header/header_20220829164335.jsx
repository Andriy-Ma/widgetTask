import React from 'react';
import Icon from './logo-generic';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header} id="myTopnav">
        <div className={styles.logo}>
          <a href="#home">
            <Icon/>
          </a>
        </div>
        <div className={styles.middleOfHeader}>
          <ul>
            <li>Expertise</li>
          </ul>
          <a href="#news">Expertise</a>
          <a href="#contact">Industries</a>
          <a href="#about">News</a>
          <a href="#news">Partners</a>
          <a href="#contact">Careers</a>
          <a href="#about">About Us</a>
        </div>
        <div>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Header;