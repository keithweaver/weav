import React from 'react';

// Assets
// import TwitterLogo from '../../assets/twitter_white_512.png';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const GoogleButton = (props) => {
  return (
    <SocialButton
      {...props}
      text="Sign in with Google"
      icon={TwitterLogo}
    />
  );
};

export default GoogleButton;
