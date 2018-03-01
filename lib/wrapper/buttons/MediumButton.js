import React from 'react';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const MediumButton = (props) => {
  return (
    <SocialButton
      {...props}
      text="Sign in with Medium"
      icon="https://raw.githubusercontent.com/keithweaver/demo/master/client/app/img/github_white.png?token=AGNQQGWaZc8FwAJdEye4MMeOSeXtxECqks5aoW3LwA%3D%3D"
      backgroundColor="#00a87f"
      style={{
        borderWidth: 0,
      }}
      textStyle={{
        color: '#ffffff',
      }}
    />
  );
};

export default MediumButton;
