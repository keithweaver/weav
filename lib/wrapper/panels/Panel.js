import React from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';

const panelStyle = {
  width: '100%',
  borderColor: '#BDBDBD',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 5,
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 10,
  paddingBottom: 10,
};

const Panel = (props) => {
  const {
    children,
    style,
  } = props;

  return (
    <div style={objectAssign(panelStyle, style)}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

Panel.defaultProps = {
  children: null,
  style: {},
};

export default Panel;
