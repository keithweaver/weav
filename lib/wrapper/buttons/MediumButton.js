import React from 'react';
import objectAssign from 'object-assign';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const MediumButton = (props) => {
  const {
    style,
  } = props;
  return (
    <SocialButton
      {...props}
      text="Sign in with Medium"
      icon="https://raw.githubusercontent.com/keithweaver/weav/master/lib/assets/medium_white_512.png"
      backgroundColor="#00a87f"
      style={objectAssign({}, style, { borderWidth: 0 })}
      textStyle={{
        color: '#ffffff',
      }}
    />
  );
};

export default MediumButton;
