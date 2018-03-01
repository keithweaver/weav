import React from 'react';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const MediumButton = (props) => {
  return (
    <SocialButton
      {...props}
      text="Sign in with Medium"
      icon="https://raw.githubusercontent.com/keithweaver/weav/master/lib/assets/medium_white_512.png"
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
