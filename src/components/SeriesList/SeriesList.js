import React from 'react';
import {Link} from 'react-router-dom';

const SeriesListItem = ({series}) => {

  return(
    <div>
      <Link to={`/series/${series.show.id}`}>
      {series.show.name}
      </Link>
      <img src={series.show.image} alt="" />
      
    </div>
    ) 

  }


function SeriesList({series}){

  
  return(
    
      <div style={{marginLeft:0}}>
        {series.map(series => (
          <SeriesListItem  key={series.show.id} series={series}/>
        ))}
      </div>
  )
}

export default SeriesList;