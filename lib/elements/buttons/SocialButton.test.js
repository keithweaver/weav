/* eslint-disable */
// test file
import React from 'react';
import { shallow } from 'enzyme';


import SocialButton from './SocialButton';

describe('SocialButton', () => {
  test('Shallow render of the SocialButton. Basic render, no props.', () => {
    const wrapper = shallow(
      <SocialButton />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the SocialButton with custom text.', () => {
    const wrapper = shallow(
      <SocialButton
        text="Foobar"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the SocialButton with text and text styling.', () => {
    const wrapper = shallow(
      <SocialButton
        text="Foobar"
        textStyle={{
          color: 'red',
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the SocialButton with styling.', () => {
    const wrapper = shallow(
      <SocialButton
        style={{
          borderRadius: 10,
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the SocialButton with icon.', () => {
    const wrapper = shallow(
      <SocialButton
        icon="http://randomimage.com"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the SocialButton with icon and alt text.', () => {
    const wrapper = shallow(
      <SocialButton
        altText="About the stuff"
        icon="http://anotherimg.com"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the SocialButton with icon & icon styling.', () => {
    const wrapper = shallow(
      <SocialButton
        icon="http://exampleimg.com"
        iconStyle={{
          height: 20,
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the SocialButton with background color.', () => {
    const wrapper = shallow(
      <SocialButton
        backgroundColor="#2e2e2e"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('Shallow render of the SocialButton with onClick function.', () => {
    const wrapper = shallow(
      <SocialButton
        onClick={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
