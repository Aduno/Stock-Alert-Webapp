import React from "react"
import './css/App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Main from './components/Main'


import 'bootstrap/dist/css/bootstrap.min.css'
import News from "./components/News";


function App() {
  return (
          <div className="App">
            <Navbar/>
            <Main/>
            <News/>
          </div>
    
  );
}

export default App;
