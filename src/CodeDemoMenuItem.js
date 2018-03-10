import React from 'react';
import objectAssign from 'object-assign';

const btnStyle = {
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 3,
  borderColor: '#31B404',
  paddingTop: 10,
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

  console.log('width', width);

  return (
    <button
      onClick={() => onUIComponentChange(uiComponent)}
      style={objectAssign({}, btnStyle, { width: `${width}%` })}
    >
      {uiComponent.toUpperCase()}
    </button>
  );
}

export default CodeDemoMenuItem;
