/* eslint-disable react/jsx-pascal-case */
import React,{useState} from 'react';
import axios from 'axios';
import SeriesList from '../SeriesList/SeriesList';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import './series.css';
import Error_text from '../Error_text/Error_text';
import { SeriesContext } from '../../context/SeriesContext';

function Series(){

  const [series,setSeries] = useState([]);
  const [seriesName,setseriesName] = useState('');
  const [isFetching,setisFetching] = useState(false);
  // console.log(series)

  const onInputChange = (e) => {

    let searchValue = e.target.value;
    setseriesName(searchValue);
    setisFetching(true);

    async function fetchAllData() {
      try {
        const responseAll = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchValue}`);
        setSeries(responseAll.data)
        setisFetching(false)
      } catch (error) {
        console.error(error);
      }
    }
      fetchAllData();
  }

  return(
    <div>
      <Header />
      <Input 
        onInputChange={onInputChange}
        seriesName={seriesName}
      />
      
      {!isFetching && series.length === 0 && seriesName.trim() === ''
      &&
        <Error_text>Proszę wpisać nazwę szukanego serialu!</Error_text>
      }
      {
        !isFetching && series.length === 0 && seriesName.trim() !== '' && 
        <Error_text>Brak szukanej wartości!</Error_text>
      }
      <Button 
        setSeries={setSeries} 
        setseriesName={setseriesName}
      />
      {
        isFetching && <Loader />
      }
      <SeriesContext.Provider value={series}>
      {
        !isFetching &&  <SeriesList/> 
      }
      </SeriesContext.Provider>
    </div>
    
  )
}

export default Series;