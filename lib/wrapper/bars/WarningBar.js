import React from 'react';

import Bar from '../../elements/bars/Bar';

// eslint-disable-next-line arrow-body-style
const WarningBar = (props) => {
  return (
    <Bar
      {...props}
      barColor="#F7BE81"
      textColor="#6E6E6E"
    />
  );
};

export default WarningBar;
