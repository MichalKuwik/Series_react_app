import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import { GlobalStyle } from './global/index';

ReactDOM.render(
<BrowserRouter>
  <GlobalStyle />
  <App />
</BrowserRouter>
, document.getElementById('root'));


