import React from 'react';
import Main from '../Main/Main';
import ScrollUpButton from 'react-scroll-up-button';
import styled from 'styled-components';

const MainWrapper = styled.div`
  text-align: center;
  margin-top:2rem;
`

function App() {
  return (
    <MainWrapper>
     <Main />
     <ScrollUpButton 
      style={{background:'none'}}
      ShowAtPosition={10}
      />
    </MainWrapper>
  );
}

export default App;



