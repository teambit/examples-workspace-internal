import React from 'react';
import { Chart } from './chart';
import { Section } from '@teambit/documenter.ui.section';
import { ThemeContext } from '@teambit/documenter.theme.theme-context';
import { LinkedHeading } from '@teambit/documenter.ui.linked-heading';
import { List } from '@teambit/documenter.ui.list';
import { Separator } from '@teambit/documenter.ui.separator';
import mockData from './mockData';

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
            <Chart type='pie' data={mockData.firstDataset} />
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
            <Chart type='line' data={mockData.secondDataSet} options={mockData.secondOptions} />
        </div>)
  },
];


