import React from 'react';
import objectAssign from 'object-assign';

// UI
import SocialButton from '../../elements/SocialButton';

// eslint-disable-next-line arrow-body-style
const GithubButton = (props) => {
  const {
    style,
  } = props;
  return (
    <SocialButton
      {...props}
      text="Sign in with Github"
      icon="https://raw.githubusercontent.com/keithweaver/weav/master/lib/assets/github_white_512.png"
      backgroundColor="#444444"
      style={objectAssign({}, style, { borderWidth: 0 })}
      textStyle={{
        color: '#ffffff',
      }}
    />
  );
};

export default GithubButton;
