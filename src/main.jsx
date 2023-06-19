import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import { BrowserRouter } from 'react-router-dom';
import {Provider } from 'react-redux';
import { store } from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store }>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
)
