import React,{useState} from 'react';
import SeriesList from '../SeriesList/SeriesList';
import Loader from '../Loader/Loader';
import allImg from '../../assets/img/logo-2.png'
import styles from '../App/app.module.css';
import './series.css';
import broomImg from '../../assets/img/broom.png';

import './series.css';



function Series(){

  const [series,setSeries] = useState([]);
  const [seriesName,setseriesName] = useState('');
  const [isFetching,setisFetching] = useState(false);
  const [anim,setAnim] = useState(false);

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
      <header className={styles.App_header}>
        
        <div className={styles.svg_wrapper}>
        
        <img src={allImg} alt="" className={styles.img}/>

        </div>
      </header>

    
      <div className="input-wrapper">
        <input 
          type="text" 
          onChange={onInputChange}
          value={seriesName}
          placeholder=""
          className="input"
          />
        <label className="label">wpisz nazwę</label>
        <span className="focus-border"></span>  
      </div>

      <button 
        className="resetBtn"
        onClick={() => {setseriesName('');setSeries([])}}
        >
        <img 
          src={broomImg} 
          alt="" 
          style={{width:'100%',height:'100%'}}/>
      </button>
      

      {!isFetching && series.length === 0 && seriesName.trim() === ''
      &&
      <p style={{color:'red'}}>Proszę wpisać nazwę szukanego serialu!</p>
      }
      {
        !isFetching && series.length === 0 && seriesName.trim() !== '' && 
        <p style={{color:'red'}}>Brak szukanej wartości!</p>
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