import React from "react"
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Main from './components/Main'


import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
