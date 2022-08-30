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
    <div>
      <div className={styles.form}>
        <div>
          <p className={styles.mainText}>the {selectedRole}</p>
          <p className={styles.underText}>You have chosen the role - the {selectedRole}</p>
        </div>
        <div className={styles.buttonsChooseForm}>
          {
            selectedRole === 'Borrower' ? 
            <>
            <div className={styles.role} >
                <Borrower/>
                <p className={styles.buttonText}>Go To Cabinet</p>
            </div>
            <div className={styles.cancelButton} >
                <Borrower/>
                <p className={styles.buttonText}>Cancel</p>
            </div>
            </>
            :
            <>
            <div className={styles.cancelButton} >
                <Borrower/>
                <p className={styles.buttonText}>Cancel</p>
            </div>
            <div className={styles.role} >
                <Lender/>
                <p className={styles.buttonText}>Go To Cabinet</p>
            </div>
            </>
          }
        </div>
      </div>
      <div className={styles.lowerForm}>
          
      </div>
    </div>
  </>
  )
}

export default ChooseForm;