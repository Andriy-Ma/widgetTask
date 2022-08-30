import React from 'react';
import styles from './chooseForm.module.css';
import {ReactComponent as Borrower} from './img/borrower.svg';
import {ReactComponent as Lender} from './img/lender.svg';

const roles = ['The Borrower', 'The Lender'];

function ChooseForm() {
  return (
    <div className={styles.form}>
      <div>
        <p className={styles.mainText}>Choose your role</p>
        <p className={styles.underText}>Please, choose your role in service.</p>
      </div>
      <div className={styles.buttonsChooseForm}>
      {
        roles.map(role => 
            <div className={styles.borrower}>
              {role.name === 'The Borrower' ? <Borrower/> : <Lender/>}
              <p className={styles.buttonText}>{role.name}</p>
            </div>
        )
      }
      </div>
    </div>
  )
}

export default ChooseForm;