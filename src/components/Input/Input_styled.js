import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  width:30%;
  left:50%;
  transform: translateX(-50%);

  @media screen and (max-width:770px){
        width:50%;
    }
  @media screen and (max-width:450px){
      width:80%;
   }  
`

export const Span = styled.span``;
export const Label = styled.label`
  color:#fff;
`

export const InputComponent = styled.input`
    width:100%;
    border: 0; 
    padding: 4px 0;
    font-size:1.2rem; 
    border-bottom: 2px solid #fff; 
    background-color: transparent;
    color:#fff;
    font-weight: 300;

    & ~ ${Label}{
      position: absolute;
      left: 0;
      width: 100%; 
      top:20%; 
      color: #fff;
      font-size:1.3rem;
      font-weight: 200; 
      transition: 0.3s;
      z-index: -1;
      letter-spacing: 0.5px;
    }
    
    &::focus{
      outline: none !important;
    }
    &:focus ~ ${Label}{
        top: -50%; 
        font-size: 12px; 
        color: #ff6666; 
        transition: 0.3s;
      }
    &:focus ~ ${Span}{
      position: absolute; 
      bottom: 0; 
      left: 0; 
      width: 100%; 
      height: 2px; 
      background-color: #ff6666; 
      transition: .4s;
    }
`