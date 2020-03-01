import React from 'react';
import styles from './Input.module.css';

const Input = ({onInputChange,seriesName}) => {


  return(
    <div className={styles.input_wrapper}>
        <input 
          type="text" 
          onChange={onInputChange}
          value={seriesName}
          placeholder=""
          className="input"
          />
        <label className="label">wpisz nazwę</label>
        <span className="focus-border"></span>  
    </div>
  )
}

export default Input;