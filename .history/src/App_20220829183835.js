import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/header';
import MainBlock from './components/Main/main';

function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <MainBlock/>
    </div>
  );
}

export default App;
