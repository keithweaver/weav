import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';
import Color from 'color';

const Button = (props) => {
  const {
    children,
    link,
    onClick,
    style,
    showBottomLine,
    bottomLineSize,
    color,
    fontColor,
    capitalize,
  } = props;

  const buttonStyle = {
    color: fontColor,
    backgroundColor: color,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 8,
    paddingBottom: 8,
    fontFamily: 'sans-serif',
    fontSize: 12,
    borderRadius: 5,
  };

  const backgroundColorObj = Color(color);
  let bottomLineStyle = {};
  if (showBottomLine) {
    bottomLineStyle = {
      borderColor: backgroundColorObj.lighten(0.3),
      borderBottomWidth: bottomLineSize,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
    };
  }

  if (capitalize) {
    buttonStyle.textTransform = 'uppercase';
  }

  if (link) {
    return (
      <a
        href={link}
        style={objectAssign(buttonStyle, bottomLineStyle, style)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={objectAssign(buttonStyle, bottomLineStyle, style)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  link: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  showBottomLine: PropTypes.bool,
  bottomLineSize: PropTypes.number,
  fontColor: PropTypes.string,
  capitalize: PropTypes.bool,
};
Button.defaultProps = {
  children: null,
  style: {},
  link: null,
  onClick: () => {},
  color: '#ffffff',
  showBottomLine: false,
  bottomLineSize: 2,
  fontColor: '#2E2E2E',
  capitalize: false,
};

export default Button;
