import React from 'react';

const CodeDemoMenuItem = (props) => {
  const {
    uiComponent,
    onUIComponentChange,
  } = props;

  return (
    <button
      onClick={() => onUIComponentChange(uiComponent)}
    >
      {uiComponent}
    </button>
  );
}

export default CodeDemoMenuItem;
