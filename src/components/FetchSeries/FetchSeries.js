import React,{useState,useEffect} from 'react';

const base_url = 'http://api.tvmaze.com'; 

function FetchSeries(){

  const [series,setSeries] = useState([]);
  const [seriesName,setSeriesName] = useState('');
  const [isFetching,setIsFetching] = useState(false)

  const chandleInputChange = (e) => {

    setSeriesName(e.target.value);
    setIsFetching(true);

    fetch(`${base_url}/search/shows?q=${e.target.value}`)
    .then(res => res.json())
    .then(data => {
      setSeries(data)
      setIsFetching(false)
    })
    .then(err => console.log(err))
  }


  return(
    <div>
      <div>
        <input 
          type="text" 
          onChange={chandleInputChange}
          value={series}
          />
      </div>


    </div>
  )
}

export default FetchSeries;