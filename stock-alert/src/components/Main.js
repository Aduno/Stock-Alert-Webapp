import React, { useRef } from 'react'
import { Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'

import Graph from './Graph'
import '../css/Main.css'
import { IconContext } from 'react-icons/lib'

function Main() {
  const ref = useRef(null);
  const handleClick = () =>{
    ref.current.focus();
  };
  return (
    <>
     {/* search bar */}
    <div className='container-fluid'>
      <div className='row'>
        <div id='search-bar-container'>
        <InputGroup id='search-bar'>
          <InputGroup.Text id='search-icon' onClick={handleClick}>
            <AiOutlineSearch color='black'/>
          </InputGroup.Text>
          <FormControl
            type='search'
            placeholder='Search stock'
            aria-label='Search'
            id='search-bar-input'
            ref={ref}
          />
        </InputGroup>
        </div>
        {/* // Graph */}
        <Graph/>
        {/* // Earning graph */}

        {/* // Important data */}

        {/* // Subscribe */}
      </div>
    </div>
  </>
  )

}

export default Main