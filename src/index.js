import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
 
import { HashRouter, Route, Routes } from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route path="/stories/:id" element={ <StoryPage/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </HashRouter>
  </React.StrictMode>
);
