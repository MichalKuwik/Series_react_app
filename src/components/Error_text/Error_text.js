import React from 'react';
import styles from './Error_text.module.css';

function Error_text({children}){

  return(
  <p className={styles.info}>{children}</p>
  )
}

export default Error_text;