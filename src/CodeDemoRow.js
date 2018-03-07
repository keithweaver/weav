import React, { Component } from 'react';

import CodeDemoMenu from './CodeDemoMenu';

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
      <div>
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
