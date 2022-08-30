import React,{useState} from 'react';
import styles from './App.module.css';
import Header from './components/Header/header';
import MainBlock from './components/Main/main';

function App() {

  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className={styles.container}>
      <Header/>
      {showPopup && <MainBlock closePopup={setShowPopup}/>}
    </div>
  );
}

export default App;
