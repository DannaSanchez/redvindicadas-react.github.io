import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Juega from './pages/juega-aprende/Juega-aprende';
import JuegoAdult from './pages/adultos/JuegosA';
import RecursoAdult from './pages/adultos/recursosA';
import Form from './pages/form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Juega/>}></Route>
        <Route path='/recursosAdultos' element={<RecursoAdult/>}></Route>
        <Route path='/juegoAdultos' element={<JuegoAdult/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
    </BrowserRouter>
  
);


