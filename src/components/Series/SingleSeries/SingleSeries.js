import React,{useState,useEffect} from 'react';
import { Tween } from 'react-gsap';
import Loader from '../../Loader/Loader';
import { useHistory } from "react-router-dom";
import styles from './SingleSeries.module.css';
import httpsIcon from '../../../assets/img/icon.png';
import starRating from '../../../assets/img/rating.png';
import translateImg from '../../../assets/img/translating.png';
import returnBtn from '../../../assets/img/returnArrow.png';
import sadFace from '../../../assets/img/sad.png';

function SingleSeries(props){

  const [show,setShow] = useState(null);
  
  let history = useHistory();

  // console.log(show)
  

  useEffect(() => {
    const fetchData = () => {
      const {id} = props.match.params;
  
      fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(res => res.json())
      .then(data => {
        setShow(data)
      })
      .then(err => console.log(err))
    }
    fetchData()
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
        <Tween
          staggerFrom={{
          opacity: 0,
          cycle: {
            rotationX: [90],
            transformOrigin: ['50% top -100', '50% bottom 100']
          },
        }}
        duration={1}
        stagger={0.1}
      >
            <Tween
              from={{ y:-20,scale:0 }}
            >
            <p className={styles.title} style={{margin:0,padding:0}}>{show.name}</p>
             </Tween>  
            <p className={styles.imgMainCont}> <img className={styles.imgMain} src={show.image.medium} alt="img"/></p>
            <p>Data Premiery: <br /> <br /> <span style={{border:'1px solid #ff6666',padding:'5px 10px', borderRadius:'20px'}}>
              {show.premiered ? reversePremiere(show.premiered) : <b style={{fontWeight:'300'}}>brak danych z api</b>}r.
              </span></p>
            <hr />
            <p>Ocena: <br />
              {show.rating.average ? <b>{show.rating.average}</b> : <b style={{fontWeight:'300'}}>brak danych z api</b>}
              <img style={{width:'20px',height:'20px',margin:'10px 0 0 5px'}} src={show.rating.average ? starRating : sadFace} alt="" />
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
       </Tween> 
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