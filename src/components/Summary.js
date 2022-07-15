import React from 'react';
import { LanguageContext } from '../Apps';
import '../css/summary.css';

function Summary() {
  return (
    <LanguageContext.Consumer>{(language)=>(
      <div className='col-11 row' id='summary'>
          <div className='col-6'>{language==='En'? <b>Capitalisation boursière</b> : <b>Market Cap</b>}: 5.02B</div>
          <div className='col-6'>{language==='En'? <b>Sur le rapport</b> : <b>PE ratio</b>}: 36.12</div>
          <div className='col-6'>{language==='En'? <b>Le volume</b> : <b>Volume</b>}: 321.01K</div>
          <div className='col-6'><b>Beta:</b> 0.63</div>
          <div className='col-6'>{language==='En'? <b>Taux de dividende</b> : <b>Yield</b>}: 1.24%</div>
          <div className='col-6'>{language==='En'? <b>52S de haut</b> : <b>52W high</b>}: 2501.01</div>
          <div className='col-6'>{language==='En'? <b>Bas de 52S</b> : <b>52W low</b>}: 1829.56</div>
      </div>
    )}</LanguageContext.Consumer>
  )
}

export default Summary