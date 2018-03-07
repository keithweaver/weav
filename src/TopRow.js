import React from 'react';

const wrapperStyle = {
  textAlign: 'center',
  paddingTop: '10%',
  paddingBottom: '10%',
};
const titleStyle = {
  fontFamily: '"Poppins", sans-serif',
};
const descriptionStyle = {
  fontFamily: '"Source Sans Pro", sans-serif',
};

const TopRow = () => (
  <div style={wrapperStyle}>
    <h1 style={titleStyle}>weav</h1>
    <p style={descriptionStyle}>A React component library</p>
  </div>
);

export default TopRow;
