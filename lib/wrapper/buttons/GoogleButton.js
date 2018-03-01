import React from 'react';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const GoogleButton = (props) => {
  return (
    <SocialButton
      {...props}
      text="Sign in with Google"
      icon="https://raw.githubusercontent.com/keithweaver/weav/master/lib/assets/google_512.png"
      backgroundColor="#ffffff"
      textStyle={{
        color: '#585858',
      }}
      style={{
        borderColor: '#585858',
        borderWidth: 1,
      }}
    />
  );
};

export default GoogleButton;
