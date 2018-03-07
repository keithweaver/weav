import React from 'react';
import objectAssign from 'object-assign';

const btnStyle = {
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 3,
  borderColor: '#31B404',
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 15,
  paddingRight: 15,
  fontSize: 14,
  fontFamily: '"Source Sans Pro", sans-serif',
};

const CodeDemoMenuItem = (props) => {
  const {
    uiComponent,
    onUIComponentChange,
    width,
  } = props;

  return (
    <button
      onClick={() => onUIComponentChange(uiComponent)}
      style={objectAssign({}, btnStyle, { width })}
    >
      {uiComponent}
    </button>
  );
}

export default CodeDemoMenuItem;
