import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';

const Bar = (props) => {
  const {
    percent,
    style,
    barColor,
    textStyle,
    text,
    textColor,
  } = props;

  const barWrapperStyle = {
    width: '100%',
    backgroundColor: barColor,
  };
  const barStyle = {
    width: `${percent}%`,
  };
  const textDefaultText = {
    marginTop: 0,
    marginBottom: 0,
    color: textColor,
    fontFamily: 'sans-serif',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
  };

  return (
    <div style={barWrapperStyle}>
      <div style={objectAssign({}, barStyle, style)}>
        <p style={objectAssign({}, textDefaultText, textStyle, { color: textColor })}>
          {text}
        </p>
      </div>
    </div>
  );
};

Bar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  percent: PropTypes.number,
  barColor: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  textStyle: PropTypes.object,
  text: PropTypes.string,
  textColor: PropTypes.string,
};

Bar.defaultProps = {
  style: {},
  percent: 100,
  barColor: '#ffffff',
  textStyle: {},
  text: '',
  textColor: '#2E2E2E',
};

export default Bar;
