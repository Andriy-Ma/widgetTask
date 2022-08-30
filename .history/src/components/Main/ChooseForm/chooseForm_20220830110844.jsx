import React from 'react';
import styles from './chooseForm.module.css';
import {ReactComponent as Borrower} from '../img/borrower.svg';
import {ReactComponent as Lender} from '../img/lender.svg';
import {ReactComponent as Close} from '../img/close.svg';

const roles = ['Borrower', 'Lender'];

function ChooseForm({getRole}) {

  async function text () {
    const res = await fetch('https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource');
    const ready = await res.json();
    const full = [...ready.map(lol => lol.text)]
    const pol = [...full]
    console.log(pol);
    return ready;
  };

  /*fetch('https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });*/

  text();

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
            <div className={styles.role} key={role} onClick={() => getRole(role)}>
              {role === 'Borrower' ? <Borrower/> : <Lender/>}
              <p className={styles.buttonText}>{role}</p>
            </div>
        )
      }
      </div>
    </div>
    <div className={styles.agreeForm}>
      <Close className={styles.closeButton}/>
      <div>
        <p className={styles.mainText}>Terms & Conditions</p>
        <p className={styles.underText}>You should obliged to apply the Terms & Conditions <p> to use the service.</p></p>
      </div>
      <div dangerouslySetInnerHTML={{__html: text().then(lol => lol.text)}}>
      </div>
    </div>
    </>
  )
}

export default ChooseForm;