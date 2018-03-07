import React, { Component } from 'react';

import CodeDemoMenu from './CodeDemoMenu';

const wrapperStyle = {
  maxWidth: 900,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

class CodeDemoRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uiComp: '',
    };

    this.onUIComponentChange = this.onUIComponentChange.bind(this);
  }

  onUIComponentChange(uiComponent) {
    console.log('onUIComponentChange', uiComponent);
  }

  render() {
    const uiComponents = [
      'Textbox'
    ];

    return (
      <div style={wrapperStyle}>
        <div>
          <CodeDemoMenu
            uiComponents={uiComponents}
            onUIComponentChange={this.onUIComponentChange}
          />
        </div>
      </div>
    );
  }
}

export default CodeDemoRow;
