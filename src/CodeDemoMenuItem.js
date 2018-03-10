import React from 'react';
import objectAssign from 'object-assign';

const btnStyle = {
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 3,
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
    isSelected,
  } = props;

  let borderColorStyle = {
    borderColor: '#F1F1F1',
  };
  if (isSelected) {
    borderColorStyle = {
      borderColor: '#31B404',
    };
  }

  return (
    <button
      onClick={() => onUIComponentChange(uiComponent)}
      style={objectAssign({}, btnStyle, { width: `${width}%` }, borderColorStyle)}
    >
      {uiComponent.toUpperCase()}
    </button>
  );
}

export default CodeDemoMenuItem;
