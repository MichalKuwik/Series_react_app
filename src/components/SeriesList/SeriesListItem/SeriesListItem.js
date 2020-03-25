import React from 'react';
import {Link} from 'react-router-dom';
import styles from './SeriesList.module.css';
import tapeImg from '../../../assets/img/tape.png';

const SeriesListItem = ({series}) => {

  return(
    <div className={styles.series}>
      
      <Link
       to={`/series/${series.show.id}`}
       style={{textDecoration:'none',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}
       >
         <img src={tapeImg} alt="" style={imgStyle}/>
         {series.show.name}
      </Link>
    </div>
    ) 

  }

const imgStyle = {
  width:'30px',
  height:'30px',
  marginRight:'1rem'
}

export default SeriesListItem;