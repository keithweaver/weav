import React from 'react';

import Bar from '../../elements/bars/Bar';

// eslint-disable-next-line arrow-body-style
const CustomBar = (props) => {
  return (
    <Bar
      {...props}
      barColor="#ffffff"
      textColor="#6E6E6E"
    />
  );
};

export default CustomBar;
