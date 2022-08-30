import React from 'react';
import styles from './chooseForm.module.css';
import {ReactComponent as Borrower} from './img/borrower.svg';
import {ReactComponent as Lender} from './img/lender.svg';

function ChooseForm() {
  return (
    <div className={styles.form}>
      <div>
        <p className={styles.mainText}>Choose your role</p>
        <p className={styles.underText}>Please, choose your role in service.</p>
      </div>
      <div className={styles.buttonsChooseForm}>
          <div className={styles.borrower}>
            <Borrower/>
            <p>The Borrower</p>
          </div>
          <div className={styles.lender}>
            <Lender/>
            <p>The Lender</p>
          </div>
        </div>
    </div>
  )
}

export default ChooseForm;