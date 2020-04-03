import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Tween } from 'react-gsap';
import Loader from '../../Loader/Loader';
import { useHistory } from "react-router-dom";
import styles from './SingleSeries.module.css';
import httpsIcon from '../../../assets/img/icon.png';
import starRating from '../../../assets/img/rating.png';
import translateImg from '../../../assets/img/translating.png';
import returnBtn from '../../../assets/img/returnArrow.png';
import sadFace from '../../../assets/img/sad.png';

import styled from 'styled-components';

const Title = styled.p`
  margin:0;
  padding:0;
  color:#ffff;
  font-size:2rem;
  font-weight: 300;
`;

const Acapit = styled.p`
  color:#fff;
`

function SingleSeries(props){

  const [show,setShow] = useState(null);
  
  let history = useHistory();

  // console.log(show)

  useEffect(() => {
   
    async function fetchData() {
      const {id} = props.match.params;
      try {
        const singleResponse = await axios.get(`http://api.tvmaze.com/shows/${id}?embed=episodes`);
        setShow(singleResponse.data)
      } catch (error) {
        console.error(error);
      }
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
              <Title>{show.name}
              </Title>
             </Tween>  
            <Acapit> 
                <img 
                     src={show.image.medium} 
                     alt="img"/>
            </Acapit>
            <Acapit>Data Premiery: <br /> <br /> 
              <span 
                style={{border:'1px solid #ff6666',padding:'5px 10px', borderRadius:'20px'}}>
              {show.premiered ? reversePremiere(show.premiered) : <b style={{fontWeight:'300'}}>brak danych z api</b>}r.
              </span>
            </Acapit>
            <hr />
            <Acapit>Ocena: <br />
              {show.rating.average ? <b>{show.rating.average}</b> : <b 
                style={{fontWeight:'300'}}>brak danych z api
              </b>}
                <img 
                  style={{width:'20px',height:'20px',margin:'10px 0 0 5px'}} 
                  src={show.rating.average ? starRating : sadFace} 
                  alt="" 
                />
            </Acapit>
            <hr />
            <Acapit>Liczba odcinków:
              <span 
                className={styles.frame}>{show._embedded.episodes.length}
              </span>
            </Acapit>
            <hr />
            <Acapit>Język: {show.language} 
                <img 
                  style={{width:'35px',height:'30px',marginLeft:'10px'}} 
                  src={translateImg} 
                  alt=""/>
            </Acapit>
            <hr />
            <Acapit 
              className={styles.linkP}>
              Oficjalna strona serialu: <br />
              <a 
                href={show.officialSite} 
                target="_blank"
                rel="noopener noreferrer"
                >
                  <img 
                    style={{width:'50px',height:'40px',marginTop:'10px'}} 
                    src={httpsIcon} 
                    alt=""/>
              </a>
            </Acapit>
       </Tween> 
      </div>
      }

      <button
        className={styles.btnReturn} 
        onClick={() => history.goBack()}>
          <img 
            className={styles.imgRet} 
            src={returnBtn} 
            alt='' 
          />
      </button>
    </div>
  )
}

export default SingleSeries;