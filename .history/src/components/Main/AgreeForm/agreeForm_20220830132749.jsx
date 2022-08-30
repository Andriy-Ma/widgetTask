import React, { useEffect, useState } from 'react';
import styles from './agreeForm.module.css';
import {ReactComponent as Close} from '../img/close.svg';
import {ReactComponent as Checkmark} from '../img/checkmark.svg';

function AgreeForm() {

  const [initialText, setInitialText] = useState('');
  const [scroll, setScroll] = useState(false);

  const handleScroll = event => {
    event.currentTarget.scrollTop === 1188 && setScroll(true);
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
    <div>
        <div className={styles.agreeForm}>
            <Close className={styles.closeButton}/>
            <div>
                <p className={styles.mainText}>Terms & Conditions</p>
                <p className={styles.underText}>You should obliged to apply the Terms & Conditions <p> to use the service.</p></p>
            </div>
            <div className={!scroll ? styles.scroll : undefined}>
                <div dangerouslySetInnerHTML={{__html: initialText}} className={styles.scrollText} onScroll={handleScroll}/>
            </div>
            <div className={scroll ? styles.checkActive : styles.check} >
                <Checkmark className={!scroll ? styles.checkIcon : undefined}/>
                <p className={styles.checkText}>I Agree</p>
            </div>
        </div>
    </div>
  )
}

export default AgreeForm;