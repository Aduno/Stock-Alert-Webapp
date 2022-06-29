import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StoryPage from './pages/StoryPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route path="/stories/:id" element={ <StoryPage/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);