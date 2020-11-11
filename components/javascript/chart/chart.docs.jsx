import React from 'react';
import { Chart } from './chart';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Separator } from '@teambit/documenter.ui.separator';

export default function Overview() {
  return (
    <ThemeContext> 
      <>
        <Section>
          <LinkedHeading link="guidelines">Guidelines</LinkedHeading>
          <List spacing="lg">
            {[
              `Chart components are based on Charts.js, an open source HTML5 based charting library.`,
              `This is an example of a js component being developed with the react-babel env`
            ]}
          </List>
        </Section>
        <Separator />
      </>
    </ThemeContext>
  );
};


Overview.abstract = 'A responsive chart by Primereasct, based on Chart.js';

Overview.labels = ['react', 'javascript', 'chart'];


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


Overview.examples = [
  {
    scope: {
      Chart,
    },
    title: 'Using the Chart component',
    description: 'Basic pie chart.',
    jsx: 
    (
        <div style={{ width: 400 }}>
            <Chart type='pie' data={data1} />
        </div>)
  },
  {
    scope: {
      Chart,
    },
    description: 'Basic line chart.',
    jsx: 
    (
        <div style={{ width: 400 }}>
            <Chart type='line' data={data2} options={options2} />
        </div>)
  },
];


