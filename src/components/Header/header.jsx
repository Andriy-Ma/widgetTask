import React, { useState } from 'react';
import Icon from './img/logo-generic';
import {ReactComponent as Lock} from './img/lock.svg';
import {ReactComponent as SignUp} from './img/signup.svg';
import styles from './header.module.css';

function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const changeShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.header}>
        <div className={styles.logo}>
          <a href="#home">
            <Icon/>
          </a>
        </div>
        <div className={showMenu ? styles.middleOfHeaderResponsive : styles.halfOfHeader}>
          <div className={!showMenu ? styles.middleOfHeader : styles.columnMenu }>
            <a href="#expertise">Expertise</a>
            <a href="#industries">Industries</a>
            <a href="#news">News</a>
            <a href="#partners">Partners</a>
            <a href="#careers">Careers</a>
            <a href="#aboutus" className={styles.aboutUs}>About Us</a>
          </div>
          <div className={!showMenu ? styles.buttonsHeader : styles.buttonsHeaderResponsive}>
            <div className={!showMenu ? styles.signin : styles.signinMenu}>
              <Lock/>
              <p>Sign In</p>
            </div>
            <div className={!showMenu ? styles.signup : styles.signupMenu}>
              <SignUp/>
              <p>Sign Up</p>
            </div>
          </div>
        </div>
        <p className={styles.icon} onClick={changeShowMenu}>
          <i className="fa fa-bars"></i>
        </p>
    </div>
  )
}

export default Header;