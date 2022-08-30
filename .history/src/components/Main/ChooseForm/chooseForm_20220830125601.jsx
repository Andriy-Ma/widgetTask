import React, { useEffect, useState } from 'react';
import styles from './chooseForm.module.css';
import {ReactComponent as Borrower} from '../img/borrower.svg';
import {ReactComponent as Lender} from '../img/lender.svg';
import {ReactComponent as Close} from '../img/close.svg';
import {ReactComponent as Checkmark} from '../img/checkmark.svg';

const roles = ['Borrower', 'Lender'];

function ChooseForm({getRole}) {

  const [initialText, setInitialText] = useState('');
  const [scroll, setScroll] = useState(false);
  const [maxScroll, setMaxScroll] = useState();

  const handleScroll = event => {
    event.currentTarget.scrollTop === 1177 && setScroll(true);

    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.height());
    console.log(Math.max(event.currentTarget.scrollTop));
  };

  useEffect(() => {
    fetch('https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const text = data.map(lorem => lorem.text);
      setInitialText(text[0]);
    });
  },[]);

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
      <div dangerouslySetInnerHTML={{__html: initialText}} className={styles.scrollText} onScroll={handleScroll}/>
      <div className={scroll ? styles.checkActive : styles.check} >
        <Checkmark className={!scroll ? styles.checkIcon : undefined}/>
        <p className={styles.checkText}>I Agree</p>
      </div>
    </div>
    </>
  )
}

export default ChooseForm;