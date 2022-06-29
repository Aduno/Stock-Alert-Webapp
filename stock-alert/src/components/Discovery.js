import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

import '../css/Discovery.css'

import agriculture from '../img/icons/agriculture.svg'
import banking from '../img/icons/banking.svg'
import energy from '../img/icons/energy.svg'
import engineering from '../img/icons/engineering.svg'
import insurance from '../img/icons/insurance.svg'
import mining from '../img/icons/mining.svg'
import software from '../img/icons/software.svg'
import telecom from '../img/icons/telecom.svg'

import {STOCKTYPE} from '../data/StockData';

let stockList = STOCKTYPE.Agriculture;

function Discovery() {
  const [selected, setSelected] = useState('Agriculture');
  const [list, setList] = useState(stockList);

  const onSelectItem = (item) => {
    if(item!==selected){
      setSelected(item);
    }

  }
  const listItems = () =>{
    return(
      <li>d</li>
    )
  }
  useEffect(()=> {
    setList(STOCKTYPE[selected])
  }, [selected])

  // useEffect(()=>{
  // }, [list])
  return (
    <>
    {/* // Title */}
    <div id='discovery' className='row justify-content-center'>
      <h1 id='discovery-title'>Discover stocks</h1>
    {/* // Interactive button */}
      <div className='d-flex justify-content-center'>
        <Form className='btn-group-container'>
              <div key={`inline-$checkbox`} className="row justify-content-around">
              <button type='button' class="btn btn-primary col-5" onClick={()=>onSelectItem('Agriculture')}>
                <img src={agriculture} alt=''/>
                <span>Agriculture</span>
              </button>
              <button type="button" class="btn btn-primary col-5" onClick={()=>onSelectItem('Banking')}>
              <img src={banking} alt=''/>
                <span>Banking</span>
              </button>
              <button type="button" class="btn btn-primary col-5" onClick={()=>onSelectItem('Energy')}>
                <img src={energy} alt=''/>
                <span>Energy</span>
              </button>
              <button type="button" class="btn btn-primary col-5" onClick={()=>onSelectItem('Engineering')}>
                <img src={engineering} alt=''/>
                <span>Engineering</span>
              </button>
              <button type="button" class="btn btn-primary col-5" onClick={()=>onSelectItem('Insurance')}>
                <img src={insurance} alt=''/>
                <span>Insurance</span>
              </button>
              <button type="button" class="btn btn-primary col-5" onClick={()=>onSelectItem('Mining')}>
                <img src={mining} alt=''/>
                <span>Mining</span>
              </button>
              <button type="button" class="btn btn-primary col-5" onClick={()=>onSelectItem('Software')}>
                <img src={software} alt=''/>
                <span>Software</span>
              </button>
              <button type="button" class="btn btn-primary col-5" onClick={()=>onSelectItem('Telecom')}>
                <img src={telecom} alt=''/>
                <span>Telecom</span>
              </button>
              </div>
          </Form>
        </div>
        <div id='list-container' className='col-11'>
          <ul>
            {
              list.map((item)=>{
                return(
                  <li className='filtered-item'>{Object.values(item)}</li>
                )
              }
              )
            }
          </ul>
        </div>
      
    </div>
    

    {/*// Dynamic list */}
    </>
  )
}

export default Discovery