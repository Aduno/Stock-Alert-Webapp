import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {TIMEINTERVAL} from '../data/StockData';

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


function Graph(props) {
  let tempTime = '5m'
  let tempsymbol = 'AMZN'
  let url = "https://www.alphavantage.co/query?"+ TIMEINTERVAL[tempTime] + "&symbol=" + tempsymbol + "&apikey=RAXQU48KQ5ND451R"; 
  // let url = "https://www.alphavantage.co/query?"+ TIMEINTERVAL[props.interval]+"symbol="+props.symbol.split(":")[0]+"&apikey="+process.env.ALPHA_VANTAGE
  const [labels, setLabel] = useState([]);
  const [dataPoints, setData] = useState([]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Time interval',
        data: dataPoints,
        borderColor: 'rgb(0, 87, 94)',
        backgroundColor: 'rgb(0, 87, 94)',
      }
    ]
  }

  const fetchData = async () => {
    const res = await fetch(url);
    const json = await res.json();
    return json
  }
  useEffect(()=>{
    fetchData().then(response => {
      const time = response;
      var key = Object.keys(response)[1];
      var times = Object.entries(response[key]).slice(0,5);
      var label = [];
      var temp;
      var data = [];
      for(const [key, value] of times){
        temp = key.split(" ")[1];
        temp = temp.substring(0, temp.length-3);
        label.push(temp);
        data.push(value["1. open"]);
      }
      setData(data)
      setLabel(label);
    })
  }, []) //Need to add props.time or something like that so it updates everytime the time var is updated
  
  const component = () => {
    const data = {
      labels,
      datasets: [
        {
          label: 'Time interval',
          data: dataPoints,
          borderColor: 'rgb(0, 87, 94)',
          backgroundColor: 'rgb(0, 87, 94)',
        }
      ]
    }
    return(
        <Line options= {options} data = {data} />
    )
  }
  return(
    component()
  )
  
}

export default Graph