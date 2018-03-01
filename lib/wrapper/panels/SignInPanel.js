import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorBar from '../bars/ErrorBar';
import Panel from './Panel';
import Textbox from '../textboxes/Textbox';
import Button from '../buttons/Button';

class SignInPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onEmailTextboxChange = this.onEmailTextboxChange.bind(this);
    this.onPasswordTextboxChange = this.onPasswordTextboxChange.bind(this);
  }

  onEmailTextboxChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onPasswordTextboxChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    const {
      error,
      handleSubmit,
    } = this.props;
    const {
      email,
      password,
    } = this.state;

    return (
      <Panel>
        {
          (error) ? (
            <ErrorBar
              text={error}
            />
          ) : (null)
        }
        <Textbox
          value={email}
          onChange={this.onEmailTextboxChange}
          label="Email"
        />
        <Textbox
          value={password}
          onChange={this.onPasswordTextboxChange}
          label="Password"
        />
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Button
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </div>
      </Panel>
    );
  }
}

SignInPanel.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

SignInPanel.defaultProps = {
  error: null,
  handleSubmit: () => {},
};

export default SignInPanel;
