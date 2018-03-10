import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';


const CodeDemoSnippet = (props) => {
  const {
    snippet,
    onChange,
  } = props;

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        name="aceeditor_id"
        value={snippet}
      />
    </div>
  );
};

export default CodeDemoSnippet;
