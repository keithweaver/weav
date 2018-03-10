import React from 'react';

const wrapperStyle = {
  width: '100%',
  paddingBottom: 20,
  paddingTop: 10,
  paddingLeft: 15,
  paddingRight: 15,
  borderColor: '#d8d8d8',
  borderStyle: 'solid',
  borderBottomWidth: 1,
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
};

const CodeDemoResult = (props) => {
  const {
    result,
  } = props;

  console.log('result', result);

  return (
    <div style={wrapperStyle}>
      {result}
    </div>
  );
};

export default CodeDemoResult;
