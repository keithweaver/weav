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


const CodeDemoSnippet = (props) => {
  const {
    snippet,
    onChange,
  } = props;

  return (
    <div
      style={wrapperStyle}
    >
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
        style={{
          width: '100%',
        }}
      />
    </div>
  );
};

export default CodeDemoSnippet;
