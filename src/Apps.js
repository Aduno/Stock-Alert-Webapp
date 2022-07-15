import React, { useState } from "react";
import './css/App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";

export const LanguageContext = React.createContext();

function Apps() {
  const [lang, setLang] = useState('Fr');

  const handleLanguageToggle = () =>{
    if(lang==='En'){
      setLang('Fr');
    }
    else{
      setLang('En');
    }
  }
  return (
    <>
     <LanguageContext.Provider value={lang}>
        <HashRouter>
            <Routes>
            <Route exact path="/" element={<App languageToggle={handleLanguageToggle}/>}/>
            <Route path="/stories/:id" element={ <StoryPage />}/>
            <Route path="/contact" element= {<Contact  languageToggle={handleLanguageToggle}/>}/>
            <Route path="/faq" element={<FAQ  languageToggle={handleLanguageToggle}/>}/>
            </Routes>
        </HashRouter>
      </LanguageContext.Provider>
    </>

  );
}

export default Apps;