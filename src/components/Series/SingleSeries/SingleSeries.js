import React,{useState,useEffect} from 'react';
import Loader from '../../Loader/Loader';
import { useHistory } from "react-router-dom";
import styles from './SingleSeries.module.css';
import httpsIcon from '../../../assets/img/icon.png';
import starRating from '../../../assets/img/rating.png';
import translateImg from '../../../assets/img/translating.png';
import returnBtn from '../../../assets/img/returnArrow.png';

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
        {/* <p className={styles.title}>{show.name}</p> */}
        <p className={styles.imgMainCont}> <img className={styles.imgMain} src={show.image.medium} alt="img"/></p>
        <p>Data Premiery: <br /> <br /> <span style={{border:'1px solid #ff6666',padding:'5px 10px', borderRadius:'20px'}}>{reversePremiere(show.premiered)}r.</span></p>
        <hr />
        <p>Ocena: <br />
          {show.rating.average}
          <img style={{width:'20px',height:'20px',margin:'10px 0 0 5px'}} src={starRating} alt="" />
        </p>
        <hr />
        <p className={styles.countP}>Liczba odcinków:<span className={styles.frame}>{show._embedded.episodes.length}</span></p>
        <hr />
        <p className={styles.language}>Język: {show.language} <img style={{width:'35px',height:'30px',marginLeft:'10px'}} src={translateImg} alt=""/></p>
        <hr />
        <p className={styles.linkP}>
          Oficjalna strona serialu: <br />
          <a 
            href={show.officialSite} 
            target="_blank"
            rel="noopener noreferrer"
            ><img style={{width:'50px',height:'40px',marginTop:'10px'}} src={httpsIcon} alt=""/>
          </a>
        </p>
        {/* <p className={styles.filmSpecies}>Gatunki: < br /> < br /> {show.genres.map(item => (
          <b key={item} style={{marginLeft:'1rem'}}>{item}</b>
        ))}</p>   */}
      </div>
      }

      <button
        className={styles.btnReturn} 
        onClick={() => history.goBack()}>
        <img className={styles.imgRet} src={returnBtn} alt='' />
      </button>
    </div>
  )
}

export default SingleSeries;