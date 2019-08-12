import React from 'react';

import OptionItem from '../../elements/questionnaire/OptionItem';

const Options = (props) => {
  return (
    <div>
      {
        (props.options) ? (
          (props.options).map((option) => (
            <OptionItem
              text={option}
              onClickOption={props.onClickOption}
              id={option}
              disableOption={false}
            />
          ))
        ) : (null)
      }
      {
        (props.futureOptions) ? (
          (props.futureOptions).map((option) => (
            <OptionItem
              text={option}
              disableOption
            />
          ))
        ) : (null)
      }
    </div>
  );
};

export default Options;
