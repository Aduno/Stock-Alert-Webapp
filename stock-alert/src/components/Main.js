import React, { useRef, useState } from 'react'
import { Button, Form, FormControl, FormGroup, InputGroup, Modal, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'

import Graph from './LineGraph'
import '../css/Main.css'
import { IconContext } from 'react-icons/lib'
import Earnings from './BarGraph'
import IntervalButton from './IntervalButton'
import AutoCompleteText from './AutoCompleteText'
import Summary from './Summary'

function Main() {
  
  const [symbol, setSymbol] = useState('GOOG'); //Default as google
  const [interval, setInterval] = useState('1h'); // Default as 1 hour interval
  const [calculated, setCalculated] = useState(0);
  

  // For stock alert modal
  const [show, setShow] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTransition = () => {
    handleClose();
    confirmShow();
  }
  const confirmClose = () => setConfirmed(false);
  const confirmShow = () => setConfirmed(true);

  // For calculating price trigger point
  const calculate = (e) => {
    var x = 0;
  }
  return (
    <>
     {/* search bar */}
    <div className='container-fluid' id='main'>
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
        <Summary />
        {/* // Subscribe */}
        <div id='alert' className="col-4 text-center sub-btn">
          <Button onClick={handleShow}>
            Create alert
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Creating stock alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* Stock name */}
            <div className='row justify-content-center'>
              <h5 className='text-dark text-center'>{symbol}</h5>

              {/* Increase/decrease */}
              <ToggleButtonGroup className='col-12'type="radio" name="options" defaultValue={1} onChange={()=>console.log("here")}>
                <ToggleButton id="tbg-radio-1" value={1}>
                  Increase
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                  Decrease
                </ToggleButton>
              </ToggleButtonGroup>
                
                {/* Value input */}
                <input className='col-11'type='number' step='0.01' onChange={calculate} placeholder='Value'></input>
                <div className='text-center'>Trigger point: ${calculated}</div>
                <input class='col-11' type='tel' placeholder='Phone number'/>
                <input className='col-11' type='email' placeholder='Email'/>
            </div>
              
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleTransition}>
                Create alert
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={confirmed} onHide={confirmClose}>
            <Modal.Header closeButton>
              <Modal.Title>Alert Created!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Your alert for {symbol} was created. 
              <br/>
              Target price: Some price 
              <br/>
              Change: %/$
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={confirmClose}>
                  Close
                </Button>
            </Modal.Footer>
          </Modal>
      </div>
    </div>
  </>
  )

}

export default Main