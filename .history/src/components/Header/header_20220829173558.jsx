import React from 'react';
import Icon from './logo-generic';
import {ReactComponent as Lock} from './lock.svg';
import {ReactComponent as SignUp} from './signup.svg';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
          <a href="#home">
            <Icon/>
          </a>
        </div>
        <div className={styles.middleOfHeader}>
          <a href="#expertise">Expertise</a>
          <a href="#industries">Industries</a>
          <a href="#news">News</a>
          <a href="#partners">Partners</a>
          <a href="#careers">Careers</a>
          <a href="#aboutus" className={styles.aboutUs}>About Us</a>
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