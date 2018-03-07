import React from 'react';

const CodeDemoMenu = props => (
  <div>
    {
      (props.uiComponents).map(uiComponent => (
        <CodeDemoMenuItem
          uiComponent={uiComponent}
          onUIComponentChange={props.onUIComponentChange}
        />
      ))
    }
  </div>
);

export default CodeDemoMenu;
