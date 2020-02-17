import React from 'react';
import {Link} from 'react-router-dom';

const SeriesListItem = ({series}) => {

  return(
    <div style={{marginTop:'2rem'}}>
      <Link
       to={`/series/${series.show.id}`}
       style={{textDecoration:'none',color:'yellow'}}
       >
      {series.show.name}
      </Link>
      <img src={series.show.image} alt="" />
      
    </div>
    ) 

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