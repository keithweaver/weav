import React from 'react';

const wrapperStyle = {
  height: 30,
  paddingTop: 15,
};

const canSkipStyle = {
  width: '100%',
  maxWidth: 100,
  display: 'inline-block',
};
const canSkipBtnStyle = {
  backgroundColor: '#DF7401',
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 2,
  borderStyle: 'solid',
  borderColor: '#FAAC58',
  borderRadius: 4,
  paddingLeft: 15,
  paddingRight: 15,
  color: '#fff',
};
const submitStyle = {
  width: '100%',
  maxWidth: 100,
  display: 'inline-block',
  float: 'right',
};
const submitBtnStyle = {
  backgroundColor: '#088A08',
  borderTopWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderBottomWidth: 2,
  borderStyle: 'solid',
  borderColor: '#04B404',
  borderRadius: 4,
  paddingLeft: 15,
  paddingRight: 15,
  color: '#fff',
};

const SubmitQuestion = (props) => {
  const { canSkip, skipAction, submitAction } = props;

  return (
    <div style={wrapperStyle}>
      {
        (canSkip) ? (
          <div style={canSkipStyle}>
            <button
              style={canSkipBtnStyle}
              onClick={skipAction}
            >
              Skip
            </button>
          </div>
        ) : (null)
      }
      <div style={submitStyle}>
        <button
          style={submitBtnStyle}
          onClick={submitAction}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SubmitQuestion;
