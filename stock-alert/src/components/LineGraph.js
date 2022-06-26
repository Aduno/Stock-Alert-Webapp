import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'Stock name',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Time interval',
      data: [
        10,
        20,
        30,
        400,
        500,
        600,
        700]
      ,
      borderColor: 'rgb(0, 87, 94)',
      backgroundColor: 'rgb(0, 87, 94)',
    }
  ],
};
function Graph(props) {
  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

export default Graph