import React,{useState,useEffect} from 'react';
import Loader from '../../Loader/Loader';
import { useHistory } from "react-router-dom";

function SingleSeries(props){

  const [show,setShow] = useState(null);
  

 

  
  let history = useHistory();

  // console.log(show)

  useEffect(() => {
    const {id} = props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
    .then(res => res.json())
    .then(data => {
      setShow(data)
    })
    .then(err => console.log(err))
  },[])

 
  const reversePremiere = (content) => {
    return content.split('-').reverse().join('-');
  }

  return(
    <div>
      {show === null && <Loader />}
      {show !== null 
        && 
      <div>
        <p>{show.name}</p>
        <p>Data Premiery: {reversePremiere(show.premiered)}r.</p>
        <p>Ocena: {show.rating.average}</p>
        <p>Liczba odcinków: {show._embedded.episodes.length}</p>
        <p>Język: {show.language}</p>
        <a href={show.officialSite}>Oficjalna strona serialu</a>
        <p><img src={show.image.medium} alt="img"/></p>
        <p>Gatunki: {show.genres.map(item => (
          <b key={item} style={{marginLeft:'1rem'}}>{item}</b>
        ))}</p>  
      </div>
      }

      <button onClick={() => history.goBack()}>wróć</button>
    </div>
  )
}

export default SingleSeries;