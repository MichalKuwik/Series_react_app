import React from 'react';
import { Tween} from 'react-gsap';
import styles from './Input.module.css';


const Input = ({onInputChange,seriesName}) => {


  return(
    
        <div className={styles.input_wrapper}>
            <Tween
              from={{ 
                width:0,
                delay:0.5
              }}
            >
              <input 
                type="text" 
                onChange={onInputChange}
                value={seriesName}
                placeholder=""
                className="input"
              />
            </Tween>

            <Tween from={{y: '-10px',opacity:0,delay:0.7}}>  
              <label className="label">wpisz nazwę</label>
            </Tween>
            <span className="focus-border"></span>  
        </div>
    
  )
}

export default Input;