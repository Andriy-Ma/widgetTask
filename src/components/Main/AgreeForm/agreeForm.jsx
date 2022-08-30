import React, { useState } from 'react';
import styles from './agreeForm.module.css';
import {ReactComponent as Close} from '../img/close.svg';
import {ReactComponent as Checkmark} from '../img/checkmark.svg';

function AgreeForm({showForm, text, closePopup}) {

  const [scroll, setScroll] = useState(false);

  const handleScroll = event => {
    (event.currentTarget.scrollHeight - event.currentTarget.scrollTop === event.currentTarget.clientHeight) && setScroll(true);
  };

  return (
    <div>
        <div className={styles.agreeForm}>
            <Close className={styles.closeButton} onClick={() => showForm(false)}/>
            <div>
                <p className={styles.mainText}>Terms & Conditions</p>
                <p className={styles.underText}>You should obliged to apply the Terms & Conditions to use the service.</p>
            </div>
            <div className={!scroll ? styles.scroll : undefined}>
                <div dangerouslySetInnerHTML={{__html: text}} className={styles.scrollText} onScroll={handleScroll}/>
            </div>
            <div className={scroll ? styles.checkActive : styles.check} onClick={() => {scroll && closePopup(false)}}>
                <Checkmark className={!scroll ? styles.checkIcon : undefined}/>
                <p className={styles.checkText}>I Agree</p>
            </div>
        </div>
    </div>
  )
}

export default AgreeForm;