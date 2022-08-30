import React from 'react';
import ChooseForm from './ChooseForm/chooseForm';
import styles from './chooseForm.module.css';

function MainBlock() {
  return (
    <div className={styles.container}>
        <ChooseForm/>
    </div>
  )
}

export default MainBlock;