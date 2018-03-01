import React from 'react';

import Bar from '../../elements/Bar';

// eslint-disable-next-line arrow-body-style
const SuccessBar = (props) => {
  return (
    <Bar
      {...props}
      barColor="#298A08"
      textColor="#FFFFFF"
    />
  );
};

export default SuccessBar;
