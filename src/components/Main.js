import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Form, FormControl, FormGroup, InputGroup, Modal, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

import Graph from './LineGraph'
import '../css/Main.css'
import Earnings from './BarGraph'
import IntervalButton from './IntervalButton'
import AutoCompleteText from './AutoCompleteText'
import Summary from './Summary'
import { LanguageContext } from '../Apps'

function Main(props) {

  const [symbol, setSymbol] = useState('GOOG'); //Default as google
  const [interval, setInterval] = useState('1h'); // Default as 1 hour interval
  const [calculated, setCalculated] = useState(0);
  const [currentPrice, setCurrent] = useState(0);
  const price = useRef(null);
  const telephone = useRef(null);
  const alertEmail = useRef(null);

  // For stock alert modal
  const [show, setShow] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [checked, setChecked] = useState(false);

  const updateCurrent = (val) =>{
    setCurrent(val);
  }
  const handleChecked = (e) =>{
    setChecked(!checked);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTransition = () => {
    if(alertEmail.current.value.length==0){
      alert("Email is required");
    }
    else if(price.current.value==null||price.current.value==0){
      alert("Target value needs to be set");
    }
    else if(calculated<0){
      alert("Trigger point cannot be less than 0");
    }
    else{
      handleClose();
      confirmShow();
    }
  }
  const confirmClose = () => setConfirmed(false);
  const confirmShow = () => setConfirmed(true);

  // For calculating price trigger point
  const calculate = (e) => {
    let x = currentPrice;
    let z = 0;
    let y = 0;
    let k = 0;

    // Lots of parseFloat but sometimes the current value switches between float and stirng so
    // hacky way of fixing things
    try{
      z = parseFloat(currentPrice);
      y = parseFloat(e.target.value,10);
      if(checked){
        k = z-y
      }
      else{
        k = z+y;
      }
    }
    catch(x){ //Entered through the increase/decrease call
      z = parseFloat(currentPrice);
      y = parseFloat(e.current.value,10);
      if(checked && e.current!=null){
        k = z-y
      }
      else if(!checked && e.current!=null){
        k = z+y;
      }
      
    }
    finally{
      k = k.toFixed(2);
      setCalculated(k);
      return null;
    }
  }

  useEffect(()=>{
    calculate(price);
  }, [checked]);

  const confirmMsg = <>Your alert for {symbol} was created. <br/>Current price: ${currentPrice}<br/>Target price: ${calculated}<br/>Email: {(alertEmail.current!=null)? alertEmail.current.value: ""}<br/>Phone: {(telephone.current!=null)? telephone.current.value : ""}</>;
  const confirmMsgFr = <>votre alerte pour {symbol} a été créée. <br/>Prix ​​actuel: ${currentPrice}<br/>Prix cible: ${calculated}<br/>E-mail: {(alertEmail.current!=null)? alertEmail.current.value: ""}<br/>Téléphoner: {(telephone.current!=null)? telephone.current.value : ""}</>;
  return (
    <LanguageContext.Consumer>{(language) =>(
    <>
     {/* search bar */}
    <div className='container-fluid' id='main'>
      <div className='row  justify-content-center'>
        <div id='search-bar-container'>
        
        <div id='search-bar' className='col-lg-7'>
          <span id='search-bar-input'>
              <AutoCompleteText onSubmit= {setSymbol}/>
          </span>
        </div>
        
        
        </div>
        {/* // Graph */}
        <div className='bg-grey col-11 col-lg-7 graph-container'>
          <Graph symbol={symbol} interval={interval} setCurrent={updateCurrent}/>
        </div>

        {/* <div className='btn-container'> 
          <div className='interval-btn-group'>
            <IntervalButton onChange={setInterval}>1y</IntervalButton>
            <IntervalButton onChange={setInterval}>1w</IntervalButton>
            <IntervalButton onChange={setInterval}>1d</IntervalButton>
            <IntervalButton onChange={setInterval}>1h</IntervalButton>
            <IntervalButton onChange={setInterval}>5m</IntervalButton>
          </div>
        </div> */}

        {/* // Earning graph */}
        <div className='bg-grey col-11 col-lg-7 earning-container'>
          <Earnings />
        </div>
        {/* // Important data */}
        <Summary className='col-11 col-lg-7'/>
        {/* // Subscribe */}
        <div id='alert' className="col-4  text-center sub-btn">
          <Button onClick={handleShow}>
          {(language!='En'? 'Create Alert':'Créer une alerte')}
          </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{language=='En'? "Création d'une alerte":'Creating stock alert'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* Stock name */}
            <div className='row justify-content-center'>
              <h5 className='text-dark text-center'>{symbol}<br/>Price: ${currentPrice.toString().substring(0, currentPrice.toString().length-2)}</h5>

              {/* Increase/decrease */}
              <ToggleButtonGroup className='col-12 toggle-group'type="radio" name="options" defaultValue={1} onChange={handleChecked}>
                <ToggleButton className={checked? 'toggled-btn':'untoggled-btn'} id="tbg-radio-1" value={1}>
                  {language=='En'? 'Augmenter':'Increase'}
                </ToggleButton>
                <ToggleButton className={checked? 'untoggled-btn':'toggled-btn'} id="tbg-radio-2" value={2}>
                {language=='En'? 'Diminuer':'Increase'}
                </ToggleButton>
              </ToggleButtonGroup>
                
                {/* Value input */}
                <input className='col-11'type='number' step='0.01' onChange={calculate} placeholder={language=='En'? 'évaluer':'Value'} ref={price}></input>
                <div id='trigger-text' className='text-center'> {language=='En'? 'Point de déclenchement':'Trigger Point'}Trigger point: ${calculated}</div>
                <input class='col-11 user-input' type='tel' placeholder={language=='En'? 'Numéro de téléphone':'Telephone number'} ref={telephone}/>
                <input className='col-11 user-input' type='email' placeholder='E-mail' ref={alertEmail}/>
            </div>
              
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
              {language=='En'? 'Fermer':'Close'}
              </Button>
              <Button className='primary' variant="primary" onClick={handleTransition}>
              {language=='En'? 'Confirmer':'Confirm'}
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={confirmed} onHide={confirmClose}>
            <Modal.Header closeButton>
              <Modal.Title>{language=='En'? 'Alerte créée':'Alert Created!'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {(language=='En')? <p className='text-dark'>{confirmMsgFr}</p>: <p className='text-dark'>{confirmMsg}</p>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={confirmClose}>
                {language=='En'? 'Fermer':'Close'}
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    </div>
    </>
  )}</LanguageContext.Consumer>
  )

}

export default Main