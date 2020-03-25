import React from 'react';
import { Tween} from 'react-gsap';
import allImg from '../../assets/img/move-logo.png'
import styles from './Header.module.css';


function Header(){

  return(
    <header className={styles.App_header}>
      <div className={styles.svg_wrapper}>
      <Tween
        from={{ 
          y: '-40px', 
          opacity:0,
          
         }}
      >
        <img src={allImg} alt="" className={styles.img}/>
      </Tween>  
      </div>
    </header>
  )
}
  
export default Header;