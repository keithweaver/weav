import React from 'react';

const OptionItem = (props) => {
  return (
    <div>
      <button
        onClick={(props.disableOption) ? (() => {}) : (() => props.onClickOption(props.id))}
      >
        <span>{props.text}</span>
        {
          (props.subText) ? (
            <span>
              {props.subText}
            </span>
          ) : (null)
        }
      </button>
    </div>
  );
};

export default OptionItem;
