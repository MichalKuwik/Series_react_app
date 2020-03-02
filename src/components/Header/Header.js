import React from 'react';
import allImg from '../../assets/img/move-logo.png'
import styles from './Header.module.css';

function Header(){

  return(
    <header className={styles.App_header}>
      <div className={styles.svg_wrapper}>
        <img src={allImg} alt="" className={styles.img}/>
      </div>
    </header>
  )
}
  
export default Header;