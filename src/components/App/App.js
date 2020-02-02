import React from 'react';
import Main from '../Main/Main';
import styles from './app.module.css';



function App() {

  

  return (
    
    <div className={styles.app}>
      <header className="App-header">
        <h1 className="App-title">
          Tv series list
        </h1>
      </header>
     <Main />
    </div>
  );
}

export default App;
