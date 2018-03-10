import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

const wrapperStyle = {
  width: '100%',
  paddingLeft: 15,
  paddingRight: 15,
  paddingBottom: 20,
  paddingTop: 10,
};
const textStyle = {
  fontSize: 14,
  fontFamily: '"Source Sans Pro", sans-serif',
  paddingBottom: 15,
  color: '#A4A4A4',
};


const CodeDemoSnippet = (props) => {
  const {
    snippet,
    onChange,
  } = props;

  return (
    <div
      style={wrapperStyle}
    >
      <p style={textStyle}>Try typing in some props below based on the docs for the component.</p>
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        name="aceeditor_id"
        value={snippet}
        showLineNumbers={false}
        fontSize={14}
        showGutter={false}
        highlightActiveLine={false}
        showPrintMargin={false}
        style={{
          width: '100%',
        }}
        width="100%"
        height="175px"
      />
    </div>
  );
};

export default CodeDemoSnippet;
