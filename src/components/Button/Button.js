import React from 'react';
import broomImg from '../../assets/img/broom.png';
import styles from './Button.module.css';

function Button({setSeries,setseriesName}){

  return(
   <button 
          className={styles.resetBtn}
          onClick={() => {setseriesName('');setSeries([])}}
          >
          <img 
            src={broomImg} 
            alt="" 
            style={{width:'100%',height:'100%'}}
          />
      </button>
  )
}

export default Button;