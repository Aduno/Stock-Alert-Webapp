import React, { useRef, useState } from 'react'
import { Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'

import Graph from './LineGraph'
import '../css/Main.css'
import { IconContext } from 'react-icons/lib'
import Earnings from './BarGraph'
import IntervalButton from './IntervalButton'
import AutoCompleteText from './AutoCompleteText'

function Main() {
  const ref = useRef(null);
  const handleClick = () =>{ // For focusing on search bar when you click on the icon
    ref.current.focus();
    console.log("HUH");
  };
  const [symbol, setSymbol] = useState('GOOG'); //Default as google
  const [interval, setInterval] = useState('1h'); // Default as 1 hour interval

  const updateGraph = () => {
    console.log("hm");
  }

  

  return (
    <>
     {/* search bar */}
    <div className='container-fluid'>
      <div className='row  justify-content-center'>
        <div id='search-bar-container'>
        
        <div id='search-bar'>
        <span id='search-bar-input'>
            <AutoCompleteText onSubmit= {setSymbol}/>
        </span>
        </div>
        
        
        </div>
        {/* // Graph */}
        
        <div className='bg-grey col-11'>
        <Graph symbol={symbol} interval={interval}/>
        </div>

        <div className='btn-container'> 
          <div className='interval-btn-group'>
            <IntervalButton onChange={setInterval}>1y</IntervalButton>
            <IntervalButton onChange={setInterval}>1w</IntervalButton>
            <IntervalButton onChange={setInterval}>1d</IntervalButton>
            <IntervalButton onChange={setInterval}>1h</IntervalButton>
            <IntervalButton onChange={setInterval}>5m</IntervalButton>
          </div>
        </div>
        {/* // Earning graph */}
        <div className='bg-grey col-11'>
          <Earnings />
        </div>
        {/* // Important data */}

        {/* // Subscribe */}
      </div>
    </div>
  </>
  )

}

export default Main