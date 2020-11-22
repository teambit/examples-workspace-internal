import React from 'react';
import { Container } from './container';
import { shallow } from 'enzyme';

// Added until https://app.asana.com/0/1199079027367205/1199212720160656/f is completed
import { adapterConfig } from '@bit/bit.bit-examples.helpers.enzyme-adapter-helper';
adapterConfig();

it('renders correctly', () => {
    const element = shallow(<Container>Test Container</Container>);
    expect(element).toMatchSnapshot();
  });