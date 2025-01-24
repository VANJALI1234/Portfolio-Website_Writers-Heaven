import React from 'react';
import ReactDOM from 'react-dom';
import'./index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
//import { render } from '@testing-library/react';


ReactDOM.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>,
   document.getElementById("root")
 );