import React from 'react';
import {Link} from 'react-router-dom';

import tapeImg from '../../assets/img/tape.png';

const SeriesListItem = ({series}) => {

  return(
    <div style={{marginTop:'2rem'}}>
      
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


function SeriesList({series}){

  
  return(
    
      <div style={{marginLeft:0,marginTop:'3rem'}}>
        {series.map(series => (
          <SeriesListItem  key={series.show.id} series={series}/>
        ))}
      </div>
  )
}

export default SeriesList;