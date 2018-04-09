import React from 'react';
import objectAssign from 'object-assign';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const GoogleButton = (props) => {
  const {
    style,
  } = props;
  return (
    <SocialButton
      {...props}
      text="Sign in with Google"
      icon="https://raw.githubusercontent.com/keithweaver/weav/master/lib/assets/google_512.png"
      backgroundColor="#ffffff"
      textStyle={{
        color: '#585858',
      }}
      style={objectAssign({}, style, {
        borderColor: '#585858',
        borderWidth: 1,
      })}
    />
  );
};

export default GoogleButton;
