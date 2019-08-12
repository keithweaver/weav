import React, { Component } from 'react';

const inputBoxWrapperStyle = {
  width: '100%',
  paddingTop: 5,
  paddingBottom: 3,
};
const inputBoxStyle = {
  width: '100%',
  maxWidth: 400,
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 5,
  paddingBottom: 5,
  fontSize: 14,
};

const addTextboxBtnStyle = {
  borderStyle: 'solid',
  borderColor: '#A4A4A4',
  borderWidth: 2,
  borderRadius: 3,
  paddingLeft: 25,
  paddingRight: 25,
  color: '#848484',
  fontSize: 12,
};
const addWrapperStyle = {
  paddingTop: 10,
};


class NNumSingleLineTextbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newAnswerValue: null,
      answer: null,
    };

    this.updateExistingAnswer = this.updateExistingAnswer.bind(this);
    this.addATextbox = this.addATextbox.bind(this);
  }

  updateExistingAnswer(e, original) {
    console.log('updateExistingAnswer', e.target.value, original);
    let {
      answer,
    } = this.props;

    const answerElements = answer.split(",");
    console.log('answerElements', answerElements);

    answer = "";
    for (let i = 0; i < answerElements.length; i++) {
      if (answer != "") {
        answer += ",";
      }
      if (answerElements[i] == original) {
        console.log('yes original found', answerElements[i], original);
        answer += e.target.value;
      } else {
        answer += answerElements[i];
      }
    }

    console.log('new answer', answer);

    // TODO handle duplicates

    this.props.updateAnswer(answer);
  }

  addATextbox() {
    console.log('addATextbox');
    let {
      answer,
    } = this.props;

    answer += ",";

    this.props.updateAnswer(answer);
  }

  newAnswer(e) {
    let {
      answer,
    } = this.props;
    const newAnswer = e.target.value;

    if (answer && answer != "") {
      answer += ",";
    }
    answer += newAnswer;

    this.props.updateAnswer(answer);
  }

  render() {
    const {
      newAnswerValue,
    } = this.state;

    let answer = "";
    if (this.props.answer) {
      answer = this.props.answer;
    }

    let answerElements = [];
    if (answer && answer.length > 0) {
      answerElements = answer.split(",");
    }

    console.log('answer', answer);
    console.log('answerElements', answerElements);

    return (
      <div>
        {
          (answerElements.length > 0) ? (
            (answerElements).map(answerElement => (
              <div style={inputBoxWrapperStyle}>
                <input
                  type="text"
                  value={answerElement}
                  onChange={(e) => this.updateExistingAnswer(e, answerElement)}
                  style={inputBoxStyle}
                />
              </div>
            ))
          ) : (
            <div style={inputBoxWrapperStyle}>
              <input
                type="text"
                value={newAnswerValue}
                onChange={(e) => this.newAnswer(e)}
                style={inputBoxStyle}
              />
            </div>
          )
        }
        <div style={addWrapperStyle}>
          <button
            onClick={this.addATextbox}
            style={addTextboxBtnStyle}
          >
            Add Input Field
          </button>
        </div>
      </div>
    );
  }
};

export default NNumSingleLineTextbox;
