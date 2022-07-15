import React, { useState } from "react";
import './css/App.css';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Discovery from './components/Discovery';


import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./components/News";
import { LanguageContext } from "./Apps";

function App(props) {
  return (
    <LanguageContext.Consumer>{
      (lang)=>(
      <>
        <Navbar languageToggle={props.languageToggle}/>
        <div className="App">
          <Main />
          <Discovery />
          <News lang={lang}/>
        </div>
      </>
      )
     }  
    </LanguageContext.Consumer>
  );
}

export default App;