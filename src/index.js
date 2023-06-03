import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import Homepage from './scripts/Hompage';
import reportWebVitals from './reportWebVitals';
import Tarjeta from './scripts/Tarjeta';
import Recompensa from './scripts/Recompensa';
import Canjeado from './scripts/Canjeado';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/Proyecto-Final-Admin' element={<Homepage />}>
        </Route>
        <Route path='/usqr' element={<Tarjeta/>}>
        </Route>
        <Route path='/recompensa' element={<Recompensa/>}>
        </Route>
        <Route path='/canjeado' element={<Canjeado/>}>
        </Route>
      </Routes>
    </Router>
      
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
