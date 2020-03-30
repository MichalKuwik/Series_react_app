import React from 'react';
import { Tween } from 'react-gsap';
import { InputWrapper,InputComponent,Label,Span } from './Input_styled';

const Input = ({onInputChange,seriesName}) => (
    
        <InputWrapper>
            <Tween
              from={{ 
                width:0,
                delay:0.5
              }}
            >
              <InputComponent 
                type="text" 
                onChange={onInputChange}
                value={seriesName}
                placeholder=""
                className="input"
              />
            </Tween>

            <Tween from={{y: '-10px',opacity:0,delay:0.7}}>  
              <Label>wpisz nazwę</Label>
            </Tween>
            <Span></Span>  
        </InputWrapper>
    
  );

export default Input;