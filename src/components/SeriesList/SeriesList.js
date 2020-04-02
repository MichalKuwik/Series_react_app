import React,{useContext} from 'react';
import {SeriesContext} from '../../context/SeriesContext';
import SeriesListItem from './SeriesListItem/SeriesListItem';
import styled from 'styled-components';

const SingleItemWrapper = styled.div`
  margin-left:0;
  margin-top:1rem;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

function SeriesList(){
  //shortes edit with hook useContext
  const seriesConsumer = useContext(SeriesContext);

  return(
        <SingleItemWrapper>
                  {seriesConsumer.map(series => (
            <SeriesListItem  key={series.show.id} series={series}/>
          ))}
        </SingleItemWrapper>
  )
}

export default SeriesList;