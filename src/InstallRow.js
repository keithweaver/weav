import React from 'react';

const wrapperStyle = {
  paddingTop: 40,
  paddingBottom: 40,
  borderColor: '#d8d8d8',
  borderStyle: 'solid',
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  textAlign: 'center',
};
const textStyle = {
  fontSize: 12,
  color: '#2e2e2e',
  paddingBottom: 10,
};
const codeStyle = {
  backgroundColor: '#f1f1f1',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  fontSize: 14,
};

const InstallRow = () => (
  <div style={wrapperStyle}>
    <p style={textStyle}>weav should be installed using npm:</p>
    <code style={codeStyle}>
      npm install weav --save
    </code>
  </div>
);

export default InstallRow;
