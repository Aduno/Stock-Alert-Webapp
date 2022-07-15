import React from 'react'
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
  export const options = {
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
  export const optionsFr = {
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

export const data = {
  labels,
  datasets: [
    {
      label: 'Revenue',
      data: [500,600,700],
      backgroundColor: 'rgb(0, 87, 94)',
    },
    {
      label: 'Earnings',
      data: [300, 500, 250],
      backgroundColor: 'rgb(0, 204, 204)',
    },
  ],
};
export const dataFr = {
  labels,
  datasets: [
    {
      label: 'Revenu',
      data: [500,600,700],
      backgroundColor: 'rgb(0, 87, 94)',
    },
    {
      label: 'Bénéfices',
      data: [300, 500, 250],
      backgroundColor: 'rgb(0, 204, 204)',
    },
  ],
};

const get_symbol = () =>{
    // Get the current stock name and convert to short form that it can be used 
}
const query = ()=>{

    return 'query?function=EARNINGS'
}
function Earnings() {
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