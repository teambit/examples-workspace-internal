import React from 'react';
import { Chart } from './chart';

const data1 = {
  labels: ['A', 'B', 'C'],
  datasets: [
    {
      data: [300, 50, 300],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#4bc0c0'
    },
    { 
      label: 'Second Dataset',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: '#565656'
    }
  ]
};

const options2 = {
  title: {
    display: true,
    text: 'My Title',
    fontSize: 16
  },
  legend: {
    position: 'bottom'
  }
};


export const PieChartBasic = () => {
  return (
    <div style={{ width: 400 }}>
      <Chart type='pie' data={data1} />
      </div>
  )
}

export const LineChartBasic = () => {
  return (
    <div style={{ width: 400 }}>
      <Chart type='line' data={data2} options={options2} />
    </div>
  )
}