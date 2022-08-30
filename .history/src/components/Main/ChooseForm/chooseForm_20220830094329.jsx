import React from 'react';
import styles from './chooseForm.module.css';
import {ReactComponent as Borrower} from '../img/borrower.svg';
import {ReactComponent as Lender} from '../img/lender.svg';

const roles = ['Borrower', 'Lender'];

function ChooseForm({getRole}) {

  return (
    <div className={styles.form}>
      <div>
        <p className={styles.mainText}>Choose your role</p>
        <p className={styles.underText}>Please, choose your role in service.</p>
      </div>
      <div className={styles.buttonsChooseForm}>
      {
        roles.map(role => 
            <div className={styles.role} key={role} onClick={() => getRole(role)}>
              {role === 'Borrower' ? <Borrower/> : <Lender/>}
              <p className={styles.buttonText}>{role}</p>
            </div>
        )
      }
      </div>
    </div>
  )
}

export default ChooseForm;