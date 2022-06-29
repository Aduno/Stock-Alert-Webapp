import React from 'react';
import '../css/summary.css';

function Summary() {
  return (
    <div className='col-11 row' id='summary'>
        <div className='col-6'><b>Market Cap:</b> 5.02B</div>
        <div className='col-6'><b>PE ratio:</b> 36.12</div>
        <div className='col-6'><b>Volume:</b> 321.01K</div>
        <div className='col-6'><b>Beta:</b> 0.63</div>
        <div className='col-6'><b>Yield:</b> 1.24%</div>
        <div className='col-6'><b>52W high:</b> 2501.01</div>
        <div className='col-6'><b>52W low:</b> 1829.56</div>
    </div>
  )
}

export default Summary