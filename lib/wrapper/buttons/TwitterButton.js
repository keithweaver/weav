import React from 'react';
import objectAssign from 'object-assign';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const TwitterButton = (props) => {
  const {
    style,
  } = props;
  return (
    <SocialButton
      {...props}
      text="Sign in with Twitter"
      icon="https://raw.githubusercontent.com/keithweaver/weav/master/lib/assets/twitter_white_512.png"
      backgroundColor="#55acee"
      style={objectAssign({}, style, { borderWidth: 0 })}
      textStyle={{
        color: '#ffffff',
      }}
    />
  );
};

export default TwitterButton;
