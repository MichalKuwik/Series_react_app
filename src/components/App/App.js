import React from 'react';
import Main from '../Main/Main';
import styles from './app.module.css';
import glasses from '../../assets/img/GLASSES-PNG.png';



function App() {

  

  return (
    
    <div className={styles.app}>
      <header className="App-header">
        
      <svg>
      <g
        id="layer1"
        transform="translate(0,-147)">
        <g
          id="g865"
          transform="matrix(0.30917874,0,0,0.30917874,-3.1195811,154.2337)">
          
            <path
              id="path1468"
              style={{fill:'none',fillRule:'evenodd',stroke:'#4ccde5',strokeWidth:4.56739378,strokeMiterlimit:4,strokeDasharray:'none',strokeOpacity:1}}
              d="m 276.81028,339.58255 a 17.200211,17.200211 0 0 1 13.73585,19.11229 17.200211,17.200211 0 0 1 -18.19721,14.92696 17.200211,17.200211 0 0 1 -16.05729,-17.20801 17.200211,17.200211 0 0 1 16.14875,-17.12223 m -58.266,-42.76733 a 22.545112,22.545112 0 0 1 30.62477,3.72094 22.545112,22.545112 0 0 1 -1.75993,30.79974 22.545112,22.545112 0 0 1 -30.84927,0.20825 22.545112,22.545112 0 0 1 -2.17558,-30.77318 m 86.28792,-24.88444 a 18.270354,18.270354 0 0 1 -24.47802,5.08469 18.270354,18.270354 0 0 1 -6.63569,-24.10383 18.270354,18.270354 0 0 1 23.63148,-8.15967 18.270354,18.270354 0 0 1 9.65041,23.06289 M 224.59588,256.71304 132.95914,34.205762 79.972148,-1.29912 M 184.78849,396.47603 H 310.20524 M 162.261,205.96338 h 171.2 m -180,-90.21338 33.6,306.4 h 121.6 l 33.6,-306.4 z" />
        </g>
      </g>
    </svg>

    <img src={glasses} alt=""/>





        <h1 className="App-title">
          Twoje seriale
        </h1>
      </header>
     <Main />
    </div>
  );
}

export default App;
