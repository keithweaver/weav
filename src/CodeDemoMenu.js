import React from 'react';

import CodeDemoMenuItem from './CodeDemoMenuItem';

const CodeDemoMenu = (props) => {
  const {
    uiComponents,
    onUIComponentChange,
  } = props;
  const itemWidth = 100 / uiComponents;

  return (
    <div>
      {
        (uiComponents).map(uiComponent => (
          <CodeDemoMenuItem
            uiComponent={uiComponent}
            onUIComponentChange={onUIComponentChange}
            width={itemWidth}
          />
        ))
      }
    </div>
  );
};

export default CodeDemoMenu;
