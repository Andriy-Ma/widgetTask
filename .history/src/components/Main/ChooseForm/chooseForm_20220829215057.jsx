import React, { useState } from 'react';
import styles from './chooseForm.module.css';
import {ReactComponent as Borrower} from './img/borrower.svg';
import {ReactComponent as Lender} from './img/lender.svg';

const roles = ['Borrower', 'Lender'];

function ChooseForm() {

  const [selectedRole, setSelectedRole] = useState('');
  console.log(selectedRole);

  return (
    <>
    <div className={styles.form}>
      <div>
        <p className={styles.mainText}>Choose your role</p>
        <p className={styles.underText}>Please, choose your role in service.</p>
      </div>
      <div className={styles.buttonsChooseForm}>
      {
        roles.map(role => 
            <div className={styles.role} onClick={() => setSelectedRole(role)}>
              {role === 'The Borrower' ? <Borrower/> : <Lender/>}
              <p className={styles.buttonText}>{role}</p>
            </div>
        )
      }
      </div>
    </div>
    <div className={styles.form}>
    <div>
      <p className={styles.mainText}>the {selectedRole}</p>
      <div className={styles.underText}>You have chosen the role - <p>the {selectedRole}</p></div>
    </div>
    <div className={styles.buttonsChooseForm}>
    {
      roles.map(role => 
          <div className={styles.role} onClick={() => setSelectedRole(role)}>
            {role === 'The Borrower' ? <Borrower/> : <Lender/>}
            <p className={styles.buttonText}>The {role}</p>
          </div>
      )
    }
    </div>
  </div>
  </>
  )
}

export default ChooseForm;