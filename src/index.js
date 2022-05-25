import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Juega from './pages/juega-aprende/Juega-aprende';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Juega/>}></Route>
      </Routes>
    </BrowserRouter>
  
);


