import React from 'react';
import styles from './selectedRoleForm.module.css';
import {ReactComponent as Borrower} from './img/borrower.svg';
import {ReactComponent as Lender} from './img/lender.svg';

function SelectedRoleForm({role}) {
  return (
    <div>
        <div className={styles.form}>
            <div>
                <p className={styles.mainText}>the {role}</p>
                <p className={styles.underText}>You have chosen the role - the {role}</p>
            </div>
            <div className={styles.buttonsChooseForm}>
                {
                role === 'Borrower' ? 
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
            <div className={styles.guideBox}>
                <div className={styles.guideButton} >
                    <Lender/>
                    <p className={styles.buttonText}>Guide Flow</p>
                </div>
                <p className={styles.guideText}>
                    Study the guide flow for the convenience of using the service.
                </p>
            </div>
        </div>
    </div>
  )
}

export default SelectedRoleForm;