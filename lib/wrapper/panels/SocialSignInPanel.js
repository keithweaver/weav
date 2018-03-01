import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import FacebookButton from '../buttons/FacebookButton';
import GithubButton from '../buttons/GithubButton';
import GoogleButton from '../buttons/GoogleButton';
import MediumButton from '../buttons/MediumButton';
import TwitterButton from '../buttons/TwitterButton';


const panelStyle = {
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 10,
  paddingBottom: 10,
};
const dividerStyle = {
  height: 10,
};

const SocialSignInPanel = (props) => {
  const {
    onMediumClick,
    onGithubClick,
    onFacebookClick,
    onGoogleClick,
    onTwitterClick,
  } = props;

  return (
    <Panel style={panelStyle}>
      <FacebookButton
        onClick={onFacebookClick}
      />
      <div style={dividerStyle} />
      <GithubButton
        onClick={onGithubClick}
      />
      <div style={dividerStyle} />
      <GoogleButton
        onClick={onGoogleClick}
      />
      <div style={dividerStyle} />
      <MediumButton
        onClick={onMediumClick}
      />
      <div style={dividerStyle} />
      <TwitterButton
        onClick={onTwitterClick}
      />
    </Panel>
  );
};

SocialSignInPanel.propTypes = {
  onMediumClick: PropTypes.func.isRequired,
  onGithubClick: PropTypes.func.isRequired,
  onFacebookClick: PropTypes.func.isRequired,
  onGoogleClick: PropTypes.func.isRequired,
  onTwitterClick: PropTypes.func.isRequired,
};

export default SocialSignInPanel;
