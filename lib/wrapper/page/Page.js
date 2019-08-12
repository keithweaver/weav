import React from 'react';

const Page = (props) => {
  const {
    style,
  } = props;

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default Page;
