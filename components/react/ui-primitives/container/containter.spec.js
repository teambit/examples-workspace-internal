import React from 'react';
import { Container } from './container';
import { shallow } from 'enzyme';

it('renders correctly', () => {
    const element = shallow(<Container>Test Container</Container>);
    expect(element).toMatchSnapshot();
  });