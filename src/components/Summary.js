import React, { useEffect, useState } from 'react';
import { LanguageContext } from '../Apps';
import '../css/summary.css';

function Summary(props) {
  const [data, setData] = useState([]);
  const url = "https://www.alphavantage.co/query?function=OVERVIEW&symbol="+ props.symbol+ "&apikey=BVICC5CUZCHBUDSU";
  const fetchData = async () => {
    
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }
  useEffect(()=>{
    fetchData().then(response => {
      data[0] = response['MarketCapitalization'];
      data[1] = response['PERatio'];
      
      if (data[0]>1000000000000){
        data[2] = (data[0]/2200000000).toFixed(1)+'K';
        data[0] = parseFloat(data[0]/1000000000000).toFixed(2)+'T';
      }
      else if(data[0]>1000000000){
        data[2] = (data[0]/22000000).toFixed(1)+'K';
        data[0] =  parseFloat(data[0]/1000000000).toFixed(2)+'B';
      }
      else if(data[0]>1000000){
        data[2] = (data[0]/22000).toFixed(1)+'K';
        data[0] =  parseFloat(data[0]/1000000).toFixed(2)+'M';
      }
      else{
        data[2] = (data[0]*21).toFixed(1);
      }
      data[3] = response['Beta'];
      data[4] = response['DividendYield'];
      data[5] = response['52WeekHigh'];
      data[6] = response['52WeekLow'];
    })
  }, [props.symbol])

  return (
    <LanguageContext.Consumer>{(language)=>(
      <div className='col-11 row' id='summary'>
          <div className='col-6'>{language==='En'? <b>Capitalisation boursière</b>:<b>Market Cap</b>}: {data[0]}</div>
          <div className='col-6'>{language==='En'? <b>Sur le rapport</b> : <b>PE ratio</b>}: {data[1]}</div>
          <div className='col-6'>{language==='En'? <b>Le volume</b> : <b>Volume</b>}: {data[2]}</div>
          <div className='col-6'><b>Beta:</b> {data[3]}</div>
          <div className='col-6'>{language==='En'? <b>Taux de dividende</b> : <b>Yield</b>}: {data[4]}</div>
          <div className='col-6'>{language==='En'? <b>52S de haut</b> : <b>52W high</b>}: {data[5]}</div>
          <div className='col-6'>{language==='En'? <b>Bas de 52S</b> : <b>52W low</b>}: {data[6]}</div>
      </div>
    )}</LanguageContext.Consumer>
  )
}

export default Summary