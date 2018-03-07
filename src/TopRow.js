import React from 'react';

const titleStyle = {
  fontFamily: '"Poppins", sans-serif',
};
const descriptionStyle = {
  fontFamily: '"Source Sans Pro", sans-serif',
};

const TopRow = () => (
  <div>
    <h1 style={titleStyle}>weav</h1>
    <p style={descriptionStyle}>A React component library</p>
  </div>
);

export default TopRow;
