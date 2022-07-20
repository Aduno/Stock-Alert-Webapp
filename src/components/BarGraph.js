import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';    
import { LanguageContext } from '../Apps';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


function Earnings(props) {
  const [revVal, setRevVal] = useState();
  const [profitVal, setProfitVal] = useState();

  const [track, setTrack] = useState(0);
  const earningOptions = [[41,54,220],[512,337, 394],[712,295,486],[132,86,20],[579, 840, 921]];
  const profitOptions = [[-300,-202,138], [-142, -227, -69],[456, 54, 128] , [87, 15, -59], [211, 396,525]];
  const updateData = () =>{
    if(track===0){
      setRevVal(earningOptions[4])
      setProfitVal(profitOptions[4])
      setTrack(1);
    }
    else if(track===1){
      setRevVal(earningOptions[1])
      setProfitVal(profitOptions[1])
      setTrack(2);
    }
    else if(track===2){
      setRevVal(earningOptions[2])
      setProfitVal(profitOptions[2])
      setTrack(3);
    }
    else if(track===3){
      setRevVal(earningOptions[0])
      setProfitVal(profitOptions[0])
      setTrack(4);
    }
    else if(track===4){
      setRevVal(earningOptions[0])
      setProfitVal(profitOptions[0])
      setTrack(0);
    }
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Earnings',
      },
    },
  };
  const optionsFr = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: "Bénéfice de l'entreprise",
      },
    },
  };

  const labels = [2019, 2020, 2021];

 const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: revVal,
      backgroundColor: 'rgb(0, 87, 94)',
    },
    {
      label: 'Earnings',
      data: profitVal,
      backgroundColor: 'rgb(0, 204, 204)',
    },
  ],
};
const dataFr = {
  labels,
  datasets: [
    {
      label: 'Revenu',
      data: revVal,
      backgroundColor: 'rgb(0, 87, 94)',
    },
    {
      label: 'Bénéfices',
      data: profitVal,
      backgroundColor: 'rgb(0, 204, 204)',
    },
  ],
};
useEffect(()=>{
  updateData();
}, [props.symbol]);
  return (
    <LanguageContext.Consumer>{
      (language)=>(
        <>
        {(language!='En')? <Bar options={options} data={data} />:<Bar options={optionsFr} data={dataFr} />}
        
        </>
      )
    }</LanguageContext.Consumer>
    
  )
}

export default Earnings