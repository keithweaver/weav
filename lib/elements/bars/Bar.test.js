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

  test('Shallow render of the Bar. Basic render, no props.', () => {
    const wrapper = shallow(
      <Bar
        percent={32}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the Bar with styling.', () => {
    const wrapper = shallow(
      <Bar
        style={{
          backgroundColor: '#2e2e2e',
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the Bar with bar color.', () => {
    const wrapper = shallow(
      <Bar
        barColor="red"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the Bar with custom text.', () => {
    const wrapper = shallow(
      <Bar
        text="Foobar"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the Bar with custom text and styling.', () => {
    const wrapper = shallow(
      <Bar
        text="Foobar"
        textStyle={{
          fontSize: 24,
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the Bar with custom text, styling and color.', () => {
    const wrapper = shallow(
      <Bar
        text="Foobar"
        textStyle={{
          fontSize: 24,
        }}
        textColor="red"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the Bar with custom text, styling and color. Overriding color.', () => {
    const wrapper = shallow(
      <Bar
        text="Foobar"
        textStyle={{
          fontSize: 24,
          color: "blue",
        }}
        textColor="red"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });


  test('Shallow render of the Bar with all props.', () => {
    const wrapper = shallow(
      <Bar
        percent={32}
        style={{
          height: 50,
        }}
        barColor="green"
        text="Foobar"
        textStyle={{
          fontSize: 24,
          color: "blue",
        }}
        textColor="red"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
