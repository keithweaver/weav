import React from 'react';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const GoogleButton = (props) => {
  return (
    <SocialButton
      {...props}
      text="Sign in with Google"
      icon="https://raw.githubusercontent.com/keithweaver/demo/master/client/app/img/github_white.png?token=AGNQQGWaZc8FwAJdEye4MMeOSeXtxECqks5aoW3LwA%3D%3D"
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
