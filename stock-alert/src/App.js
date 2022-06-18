import React from "react"
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from "./components/Navbar";



import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <h1>HI</h1>
      
    </div>
  );
}

export default App;
