import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';

const btnStyle = {
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 5,
  paddingBottom: 5,
  textAlign: 'left',
  borderWidth: 0,
  borderRadius: 3,
  width: '100%',
};
const iconBasicStyle = {
  height: 20,
  display: 'inline-block',
  verticalAlign: 'middle',
};
const textBasicStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  fontSize: 14,
  color: '#ffffff',
  paddingLeft: 8,
};


const SocialButton = (props) => {
  const {
    style,
    text,
    icon,
    iconStyle,
    backgroundColor,
    onClick,
    altText,
    textStyle,
  } = props;

  return (
    <button
      style={
        objectAssign(
          btnStyle,
          style,
          {
            backgroundColor,
          },
        )
      }
      onClick={onClick}
    >
      {
        (icon) ? (
          <img
            src={icon}
            style={objectAssign(iconBasicStyle, iconStyle)}
            alt={altText}
          />
        ) : (null)
      }
      <span style={objectAssign(textBasicStyle, textStyle)}>
        {text}
      </span>
    </button>
  );
};

SocialButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  text: PropTypes.string,
  altText: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  iconStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  textStyle: PropTypes.object,
};

SocialButton.defaultProps = {
  style: {},
  text: '',
  altText: '',
  onClick: () => {},
  backgroundColor: '',
  icon: null,
  iconStyle: {},
  textStyle: {},
};

export default SocialButton;
