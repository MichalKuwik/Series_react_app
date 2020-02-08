import React from 'react';
import Main from '../Main/Main';
import styles from './app.module.css';
import allImg from '../../assets/img/soda-pop.png'



function App() {

  

  return (
    
    <div className={styles.app}>
      <header className={styles.App_header}>
        
        <div className={styles.svg_wrapper}>
        
        <img src={allImg} alt="" className={styles.img}/>

        </div>

        <h1 className={styles.App_title}>
          Twoje seriale
        </h1>
      </header>
     <Main />
    </div>
  );
}

export default App;



