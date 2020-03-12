/* eslint-disable react/jsx-pascal-case */
import React,{useState} from 'react';
import SeriesList from '../SeriesList/SeriesList';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import './series.css';
import Error_text from '../Error_text/Error_text';


function Series(){

  const [series,setSeries] = useState([]);
  const [seriesName,setseriesName] = useState('');
  const [isFetching,setisFetching] = useState(false);
  

  // console.log(series)

  const onInputChange = (e) => {

    setseriesName(e.target.value);
    setisFetching(true);

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then(res => res.json())
    .then(data => {
      setSeries(data)
      setisFetching(false)
    })
    .then(err => console.log(err))
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
      {
        !isFetching &&  <SeriesList series={series}/> 
      }
      
    </div>
    
  )
}


export default Series;