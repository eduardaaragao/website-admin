import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL = 'https://crowdzeroapi.herokuapp.com/'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
