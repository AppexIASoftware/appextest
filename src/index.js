import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Crud from './Crudo';
import Test from './Test';
import Combo from './Combo';
import Boton from './Boton';
import MyCart from './Cart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Combo/>
    <Boton/>
    <MyCart/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
