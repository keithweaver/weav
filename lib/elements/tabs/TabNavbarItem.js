import React from 'react';
import objectAssign from 'object-assign';

const wrapperStyle = {
  display: 'inline-block',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 4,
  paddingBottom: 4,
  backgroundColor: '#d8d8d8',
  borderColor: '#d8d8d8',
};
const currentTabStyle = {
  backgroundColor: '#fff',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  borderBottomColor: '#fff',
};


const TabNavbarItem = (props) => {
  return (
    <button
      onClick={() => props.changeTab(props.tab)}
      style={
        (props.isCurrent) ? (
          objectAssign({}, props.style, wrapperStyle, currentTabStyle)
        ) : (
          objectAssign({}, props.style, wrapperStyle)
        )
      }
    >
      {props.tab}
    </button>
  );
}

export default TabNavbarItem;
