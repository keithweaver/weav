import React from 'react';

import Bar from '../../elements/bars/Bar';

// eslint-disable-next-line arrow-body-style
const ErrorBar = (props) => {
  return (
    <Bar
      {...props}
      barColor="#8A0829"
      textColor="#FFFFFF"
    />
  );
};

export default ErrorBar;
