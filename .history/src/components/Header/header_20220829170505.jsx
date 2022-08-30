import React from 'react';
import Icon from './logo-generic';
import {ReactComponent as Lock} from './lock.svg';
import {ReactComponent as SignUp} from './signup.svg';
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
          <a href="#news">Expertise</a>
          <a href="#contact">Industries</a>
          <a href="#about">News</a>
          <a href="#news">Partners</a>
          <a href="#contact">Careers</a>
          <a href="#about">About Us</a>
        </div>
        <div className={styles.buttonsHeader}>
          <div className={styles.signin}>
            <Lock/>
            <p>Sign In</p>
          </div>
          <div className={styles.signup}>
            <SignUp/>
            <p>Sign Up</p>
          </div>
        </div>
    </div>
  )
}

export default Header;