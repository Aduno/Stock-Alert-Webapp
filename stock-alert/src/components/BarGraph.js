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
      backgroundColor: 'rgb(53, 162, 235)',
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
    <Bar options={options} data={data} />
  )
}

export default Earnings