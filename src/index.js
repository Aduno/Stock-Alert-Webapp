import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

 
import { HashRouter, Route, Routes } from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Apps from './Apps';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <Apps/>
  </React.StrictMode>
);
