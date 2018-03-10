import React, { Component } from 'react';
import {
  Textbox,
} from 'weav';
import _ from 'lodash';

import CodeDemoMenu from './CodeDemoMenu';
import CodeDemoResult from './CodeDemoResult';
import CodeDemoSnippet from './CodeDemoSnippet';

const wrapperStyle = {
  maxWidth: 900,
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
};
const resultWrapperStyle = {
  paddingTop: 30,
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 15,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: '#d8d8d8',
};

const uiComponentInfo = {
  textbox: {
    result: (
      <div style={resultWrapperStyle}>
        <Textbox />
      </div>
    ),
    snippet: '',
  },
};

const findProps = (s) => {
  let snippet = _.replace(s, /<Textbox/g, '');
  snippet = _.replace(snippet, />/g, '');
  snippet = _.replace(snippet, /\n/g, '');

  const props = {};
  // Issue is you may have:
  // <Textbox
  //  test={test}
  // />
  //
  // or
  //
  // <Textbox test={test} />
  //
  // so now after code above is test={test}
  snippet = snippet.split(/[\t?\s]+/);
  console.log('snippet', snippet);

  return props;
}

const getResultBySnippet = (type, snippet) => {
  let snippetStr = _.replace(snippet, /\n/g, '');
  snippetStr = _.replace(snippet, /\t/g, '');
  switch (type) {
    case 'textbox':
      const props = findProps(snippetStr);
      return (
        <div>
          <Textbox {...props} />
        </div>
      );
    default:
      return null;
  }
}

class CodeDemoRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uiComponent: 'textbox',
      snippet: '<Textbox\n/>',
    };

    this.onUIComponentChange = this.onUIComponentChange.bind(this);
    this.onSnippetChange = this.onSnippetChange.bind(this);
  }

  onUIComponentChange(uiComponent) {
    console.log('onUIComponentChange', uiComponent);
  }

  onSnippetChange(event) {
    console.log('onSnippetChange', event);
  }

  render() {
    const {
      uiComponent,
      snippet,
    } = this.state;
    const uiComponents = [
      'textbox'
    ];

    const content = (
      <div>
        <CodeDemoResult
          result={getResultBySnippet(uiComponent, snippet)}
        />
        <CodeDemoSnippet
          onChange={this.onSnippetChange}
          snippet={snippet}
        />
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
