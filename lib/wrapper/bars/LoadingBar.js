import React from 'react';

import Bar from '../../elements/bars/Bar';

// eslint-disable-next-line arrow-body-style
const LoadingBar = (props) => {
  return (
    <Bar
      {...props}
      barColor="#FFFFFF"
      textColor="#6E6E6E"
    />
  );
};

export default LoadingBar;
