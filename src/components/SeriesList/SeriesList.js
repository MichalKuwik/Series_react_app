import React from 'react';
import SeriesListItem from '../SeriesList/SeriesListItem/SeriesListItem';

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
