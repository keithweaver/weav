import React from 'react';

const CodeDemoResult = (props) => {
  const {
    result,
  } = props;

  console.log('result', result);

  return (
    <div>
      {result}
    </div>
  );
};

export default CodeDemoResult;
