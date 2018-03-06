/* eslint-disable */
// test file
import React from 'react';
import { shallow } from 'enzyme';


import Bar from './Bar';

describe('Bar', () => {
  test('Shallow render of the Bar. Basic render, no props.', () => {
    const wrapper = shallow(
      <Bar />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
