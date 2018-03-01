import React from 'react';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const GithubButton = (props) => {
  return (
    <SocialButton
      {...props}
      text="Sign in with Github"
      icon="https://raw.githubusercontent.com/keithweaver/demo/master/client/app/img/github_white.png?token=AGNQQGWaZc8FwAJdEye4MMeOSeXtxECqks5aoW3LwA%3D%3D"
      backgroundColor="#444444"
      style={{
        borderWidth: 0,
      }}
      textStyle={{
        color: '#ffffff',
      }}
    />
  );
};

export default GithubButton;
