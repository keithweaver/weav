import React from 'react';

import CodeDemoMenuItem from './CodeDemoMenuItem';

const CodeDemoMenu = (props) => {
  const itemWidth = 100 / uiComponents;
  return (
    <div>
      {
        (props.uiComponents).map(uiComponent => (
          <CodeDemoMenuItem
            uiComponent={uiComponent}
            onUIComponentChange={props.onUIComponentChange}
            width={itemWidth}
          />
        ))
      }
    </div>
  );
};

export default CodeDemoMenu;
