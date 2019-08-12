import React from 'react';
import objectAssign from 'object-assign';

import TabNavbarItem from './TabNavbarItem';

const wrapperStyle = {
  width: '100%',
};

const TabNavbar = (props) => (
  <div
    style={objectAssign({}, props.style, { backgroundColor: props.navbarBackgroundColor }, wrapperStyle)}
  >
    {
      (props.tabs) ? (
        (props.tabs).map(tab => (
          <TabNavbarItem
            tab={tab}
            style={props.navbarItemStyle}
            isCurrent={(props.current == tab)}
            changeTab={props.changeTab}
          />
        ))
      ) : (null)
    }
  </div>
);

export default TabNavbar;
