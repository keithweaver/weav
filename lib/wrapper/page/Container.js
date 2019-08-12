import React from 'react';

const Container = (props) => (
  <div
    className={(props.isFluid) ? "container-fluid" : "container"}
    style={props.style}
  >
    {props.children}
  </div>
);

export default Container;
