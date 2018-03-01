import React from 'react';

// Assets
// import TwitterLogo from '../../assets/twitter_white_512.png';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const FacebookButton = (props) => {
  return (
    <SocialButton
      {...props}
      text="Sign in with Facebook"
      icon="https://raw.githubusercontent.com/keithweaver/weav/master/lib/assets/facebook_white_512.png"
      backgroundColor="#3b5998"
      style={{
        borderWidth: 0,
      }}
      textStyle={{
        color: '#ffffff',
      }}
    />
  );
};

export default FacebookButton;
