import React from 'react';

import CodeDemoMenuItem from './CodeDemoMenuItem';

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
