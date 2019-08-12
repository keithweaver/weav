import React from 'react';

const Col = (props) => {
  const {
    style,
  } = props;
  let {
    size,
    breakWidth,
  } = props;

  if (!size) {
    size = 12;
  }
  if (!breakWidth) {
    breakWidth = "md";
  }

  if (!props.children) {
    return (
      <div
        style={style}
        className={`col-${breakWidth}-${size}`}
      />
    );
  }

  return (
    <div
      style={style}
      className={`col-${breakWidth}-${size}`}
    >
      {props.children}
    </div>
  );
};

export default Col;
