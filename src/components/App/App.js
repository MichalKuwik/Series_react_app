import React from 'react';
import Main from '../Main/Main';
import styles from './app.module.css';
import ScrollUpButton from 'react-scroll-up-button';



function App() {

  

  return (
    
    <div className={styles.app}>
      
     <Main />
     <ScrollUpButton 
      style={{background:'none'}}
      ShowAtPosition={10}
      />
    </div>
  );
}

export default App;



