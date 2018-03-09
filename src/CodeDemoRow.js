import React, { Component } from 'react';
import {
  Textbox,
} from 'weav';

import CodeDemoMenu from './CodeDemoMenu';
import CodeDemoResult from './CodeDemoResult';
import CodeDemoSnippet from './CodeDemoSnippet';

const wrapperStyle = {
  maxWidth: 900,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const uiComponentInfo = {
  textbox: {
    result: (
      <div>
        <Textbox />
      </div>
    ),
    snippet: '',
  },
};

class CodeDemoRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uiComponent: '',
    };

    this.onUIComponentChange = this.onUIComponentChange.bind(this);
  }

  onUIComponentChange(uiComponent) {
    console.log('onUIComponentChange', uiComponent);
  }

  render() {
    const uiComponents = [
      'textbox'
    ];

    const content = (
      <div>
        <CodeDemoResult
          result={uiComponentInfo['textbox'].result}
        />
        <CodeDemoSnippet />
      </div>
    );

    return (
      <div style={wrapperStyle}>
        <div>
          <CodeDemoMenu
            uiComponents={uiComponents}
            onUIComponentChange={this.onUIComponentChange}
          />
        </div>
        {content}
      </div>
    );
  }
}

export default CodeDemoRow;
