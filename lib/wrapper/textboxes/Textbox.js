import React, { Component } from 'react';
import PropTypes from 'prop-types';
import objectAssign from 'object-assign';

class Textbox extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    const {
      onClickOutside,
    } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      onClickOutside(event);
    }
  }

  render() {
    const {
      textboxType,
      style,
      wrapperStyle,
      placeholder,
      id,
      maxLength,
      onChange,
      value,
    } = this.props;

    const wrapperAdditionalStyle = {
      paddingLeft: 3,
      paddingRight: 3,
      paddingTop: 3,
      paddingBottom: 3,
      borderColor: '#D8D8D8',
      borderStyle: 'solid',
      borderWidth: 1,
      width: '100%',
      maxWidth: 300,
    };

    const textboxStyle = {
      fontSize: 14,
      fontFamily: 'sans-serif',
      width: '100%',
      outline: 'none',
      borderWidth: 0,
    };

    return (
      <div
        style={objectAssign(wrapperAdditionalStyle, wrapperStyle)}
        ref={this.setWrapperRef}
      >
        <input
          type={textboxType}
          style={objectAssign(textboxStyle, style)}
          placeholder={placeholder}
          id={id}
          maxLength={maxLength}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

Textbox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  wrapperStyle: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  textboxType: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  onClickOutside: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
};

Textbox.defaultProps = {
  wrapperStyle: {},
  style: {},
  textboxType: 'text',
  placeholder: '',
  id: '',
  maxLength: null,
  onChange: () => {},
  onClickOutside: () => {},
  value: '',
};

export default Textbox;
