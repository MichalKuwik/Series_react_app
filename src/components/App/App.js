import React from 'react';
import Main from '../Main/Main';
import styles from './app.module.css';
import allImg from '../../assets/img/logo-new2.png'



function App() {

  

  return (
    
    <div className={styles.app}>
      <header className={styles.App_header}>
        
        <div className={styles.svg_wrapper}>
        
        <img src={allImg} alt="" className={styles.img}/>

        </div>
      </header>
     <Main />
    </div>
  );
}

export default App;



