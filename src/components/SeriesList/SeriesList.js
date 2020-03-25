import React,{useContext} from 'react';
import {SeriesContext} from '../../context/SeriesContext';
import SeriesListItem from './SeriesListItem/SeriesListItem';

function SeriesList(){
  //shortes edit with hook useContext
  const seriesConsumer = useContext(SeriesContext);

  return(
        <div style={{marginLeft:0,marginTop:'1rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
                  {seriesConsumer.map(series => (
            <SeriesListItem  key={series.show.id} series={series}/>
          ))}
        </div>
  )
}

export default SeriesList;