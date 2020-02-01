import React from 'react';
import {Link} from 'react-router-dom';

function SeriesListItem({series}){
  return(
    <div>
      <Link to={`/series/${series.show.id}`}>
      {series.show.name}
      </Link>
      <img src={series.show.image} alt="" />
      
    </div>
  )
}

export default SeriesListItem;