import React from 'react';

import CodeDemoMenuItem from './CodeDemoMenuItem';

const CodeDemoMenu = (props) => {
  const {
    uiComponents,
    onUIComponentChange,
    selected,
  } = props;
  const itemWidth = 100 / uiComponents.length;

  return (
    <div>
      {
        (uiComponents).map(uiComponent => (
          <CodeDemoMenuItem
            uiComponent={uiComponent}
            onUIComponentChange={onUIComponentChange}
            width={itemWidth}
            isSelected={(selected == uiComponent)}
          />
        ))
      }
    </div>
  );
};

export default CodeDemoMenu;
