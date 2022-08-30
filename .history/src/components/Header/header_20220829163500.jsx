import React from 'react';
import Icon from './logo-generic';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.nameOfMenu} id="myTopnav">
        <div className={styles.logo}>
          <a href="#home">
            <Icon/>
          </a>
        </div>
        <div>
          <a href="#news">Expertise</a>
          <a href="#contact" className={styles.logo}>Industries</a>
          <a href="#about">News</a>
          <a href="#news">Partners</a>
          <a href="#contact" className={styles.logo}>Careers</a>
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