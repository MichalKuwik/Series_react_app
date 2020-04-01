import React from 'react';
import {Link} from 'react-router-dom';
import tapeImg from '../../../assets/img/tape.png';
import { SingleSeries,SingleSeriesImg } from './SeriesList_styled';

const SeriesListItem = ({series}) => (
      <SingleSeries>
        <Link
        to={`/series/${series.show.id}`}
        style={{
            textDecoration:'none',
            color:'white',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <SingleSeriesImg src={tapeImg} alt=""/>
          {series.show.name}
        </Link>
      </SingleSeries>
    ); 

  export default SeriesListItem;