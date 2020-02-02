import React,{useState} from 'react';
import SeriesList from '../../components/SeriesList/SeriesList';
import Loader from '../../Loader/Loader';





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
      
      <div>
        <input 
          type="text" 
          onChange={onInputChange}
          value={seriesName}
          />
      </div>
      {!isFetching && series.length === 0 && seriesName.trim() === ''
      &&
      <p>Proszę wpisać nazwę szukanego serialu</p>
      }
      {
        !isFetching && series.length === 0 && seriesName.trim() !== '' && 
        <p>Brak szukanej wartości</p>
      }
      {
        isFetching && <Loader />
      }
      {
        !isFetching && <SeriesList series={series}/> 
      }
      
    </div>
    
  )
}

export default Series;