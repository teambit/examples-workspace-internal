import React from 'react';
import {Chart} from './chart';
import mockData from './mockData';

it('renders correctly', () => {
    const element = <Chart type='pie' data={mockData.firstDataset}/>;
    expect(element).toMatchSnapshot();
  });