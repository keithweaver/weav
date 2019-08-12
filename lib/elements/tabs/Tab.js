import React from 'react';

const wrapperStyle = {
  backgroundColor: '#fff',
};

const Tab = (props) => (
  <div style={wrapperStyle}>
    {props.children}
  </div>
);

export default Tab;
