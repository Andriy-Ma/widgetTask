import React from 'react';
import styles from './chooseForm.module.css';
import {ReactComponent as Borrower} from './img/borrower.svg';
import {ReactComponent as Lender} from './img/lender.svg';

function ChooseForm() {
  return (
    <div className={styles.form}>
      <div>
        <p className={styles.mainText}>Choose your role</p>
        <p>Please, choose your role in service.</p>
      </div>
      <div className={styles.buttonsChooseForm}>
          <div className={styles.borrower}>
            <Borrower/>
            <p>Sign In</p>
          </div>
          <div className={styles.lender}>
            <Lender/>
            <p>Sign Up</p>
          </div>
        </div>
    </div>
  )
}

export default ChooseForm;