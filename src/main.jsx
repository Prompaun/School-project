import React from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@simondmc/popup-js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
