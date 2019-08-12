import React, { Component } from 'react';

import SubmitQuestion from './SubmitQuestion';
import NNumSingleLineTextbox from './NNumSingleLineTextbox';
import Options from './Options';

const wrapperStyle = {};
const questionTextStyle = {
  fontSize: 20,
};
const subTextStyle = {
  fontSize: 14,
};

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: '',
    };

    this.updateAnswer = this.updateAnswer.bind(this);
    this.updateAnswerAndSubmit = this.updateAnswerAndSubmit.bind(this);
  }

  updateAnswer(answer) {
    this.setState({
      answer,
    });
  }

  updateAnswerAndSubmit(answer) {
    this.setState({
      answer,
    });

    this.props.submitAction(answer);
  }

  render() {
    const {
      answer,
    } = this.state;

    if (!this.props.question) {
      return null;
    }
    const q = this.props.question;
    const { question, subText, canSkip, questionType } = q;

    let questionItem = null;
    if (questionType == 'n_num_single_line_textbox') {
      questionItem = (
        <NNumSingleLineTextbox
          answer={answer}
          updateAnswer={this.updateAnswer}
        />
      );
    } else if (questionType == 'options') {
      const { options, futureOptions, optionDetails } = q;
      questionItem = (
        <Options
          options={options}
          futureOptions={futureOptions}
          optionDetails={optionDetails}
          onClickOption={this.updateAnswerAndSubmit}
        />
      );
    }

    return (
      <div style={wrapperStyle}>
        <p style={questionTextStyle}>{question}</p>
        {
          (subText) ? (
            <p style={subTextStyle}>{subText}</p>
          ) : (null)
        }
        {questionItem}
        {
          (questionType == 'options') ? (
            null
          ) : (
            <SubmitQuestion
              canSkip={canSkip}
              skipAction={this.props.skipAction}
              submitAction={this.props.submitAction}
            />
          )
        }
      </div>
    );
  }
}

export default Question;
