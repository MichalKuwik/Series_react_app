import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,900&display=swap');

  body {
    margin: 0;
    background:#000;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }
`

ReactDOM.render(
<BrowserRouter>
  <GlobalStyle />
  <App />
</BrowserRouter>
, document.getElementById('root'));


