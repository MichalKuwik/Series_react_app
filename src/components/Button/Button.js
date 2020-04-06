import React from 'react';
import PropTypes from 'prop-types';
import broomImg from '../../assets/img/broom.png';
import { ButtonStyled } from './ButtonStyled';

function Button({setSeries,setseriesName}){

  return(
      <ButtonStyled 
          onClick={() => {setseriesName('');setSeries([])}}
          >
          <img 
            src={broomImg} 
            alt="" 
            style={{width:'100%',height:'100%'}}
          />
      </ButtonStyled>
  )
}

Button.propTypes = {
  setSeries: PropTypes.func,
  setseriesName: PropTypes.func
};

export default Button;