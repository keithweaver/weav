import React, { Component } from 'react';
import {
  Textbox,
} from 'weav';
import _ from 'lodash';

import CodeDemoMenu from './CodeDemoMenu';
import CodeDemoResult from './CodeDemoResult';
import CodeDemoSnippet from './CodeDemoSnippet';
import CodeDemoDocs from './CodeDemoDocs';


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
  let snippetStr = _.replace(s, /<Textbox/g, '');
  snippetStr = _.replace(snippetStr, /\/>/g, '');
  snippetStr = _.replace(snippetStr, /\n/g, '');

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
  snippetStr = snippetStr.split(/[\t?\s]+/);
  const snippets = _.compact(snippetStr);
  console.log('snippets', snippets);

  for (let i = 0; i < snippets.length; i += 1) {
    const snippet = snippets[i];
    const posEquals = snippet.indexOf('=');
    const key = snippet.substring(0, posEquals);
    let value = snippet.substring(posEquals + 1);
    // Handles the case of foo={test} or foo={"bar"}
    if (value.charAt(0) === "{") {
      value = value.substring(1);
    }
    if (value.charAt(value.length - 1) === "}") {
      value = value.substring(0, value.length - 1);
    }

    // Handles the case of foo="bar"
    if (value.charAt(0) === "\"") {
      value = value.substring(1);
    }
    if (value.charAt(value.length - 1) === "\"") {
      value = value.substring(0, value.length - 1);
    }

    props[key] = value;
  }

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

const createPropDocStruc = (name, d, type, description) {
  return {
    prop: name,
    propDefault: d,
    propType: type,
    description,
  };
}

const getPropDocs = (type) => {
  switch (type) {
    case 'textbox':
      return [
        createPropDocStruc('wrapperStyle', '{}', 'Object', '(Optional) Inline styling for the div around the textbox.'),
        createPropDocStruc('style', '{}', 'Object', '(Optional) Inline styling for the textbox.'),
        createPropDocStruc('textboxType', 'text', 'String', '(Optional) The type of textbox: text, email, date, etc.'),
        createPropDocStruc('placeholder', '', 'String', '(Optional) The background text inside the textbox.'),
        createPropDocStruc('id', 'text', 'String', '(Optional) The id on the textbox HTML element.'),
        createPropDocStruc('maxLength', 'null', 'Number', '(Optional) The longest a text entry can be.'),
        createPropDocStruc('onChange', '() => {}', 'Function', '(Optional) The function is call on the onChange passing the event through.'),
        createPropDocStruc('onClickOutside', '() => {}', 'Function', '(Optional) The function is call when a user clicks outside the textbox.'),
        createPropDocStruc('value', '', 'String', '(Optional) The value inside the textbox.'),
      ];
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

  onSnippetChange(snippet) {
    this.setState({
      snippet,
    });
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
        <CodeDemoDocs
          propOptions={getPropDocs(uiComponent)}
        />
      </div>
    );

    return (
      <div style={wrapperStyle}>
        <div>
          <CodeDemoMenu
            uiComponents={uiComponents}
            onUIComponentChange={this.onUIComponentChange}
            selected={uiComponent}
          />
        </div>
        {content}
      </div>
    );
  }
}

export default CodeDemoRow;
