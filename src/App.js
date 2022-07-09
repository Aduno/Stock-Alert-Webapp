import React from "react";
import './css/App.css';
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Discovery from './components/Discovery';


import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./components/News";


function App() {
  return (
    <>
      <Navbar/>
      <div className="App">
        <Main/>
        <Discovery />
        <News/>
      </div>
    </>
  );
}

export default App;
