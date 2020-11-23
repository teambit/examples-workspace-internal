import React from 'react';
import { Chart } from './chart';
import mockData from './mockData';

export const PieChartBasic = () => {
  return (
    <div style={{ width: 400 }}>
      <Chart type='pie' data={mockData.firstDataset} />
    </div>
  )
}

export const LineChartBasic = () => {
  return (
    <div style={{ width: 400 }}>
      <Chart type='line' data={mockData.secondDataset} options={mockData.secondOptions} />
    </div>
  )
}