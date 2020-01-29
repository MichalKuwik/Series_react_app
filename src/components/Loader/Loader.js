import React from 'react';
import srcLoader from './loader.gif';

function Loader(){

  return(
    <div>
      <img 
        src={srcLoader} 
        alt="loader" 
        style={{width:70}}
        />
    </div>
  )
}

export default Loader;