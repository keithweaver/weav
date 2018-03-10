import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';


const CodeDemoSnippet = (props) => {
  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={props.onChange}
        name="aceeditor_id"
      />
    </div>
  );
};

export default CodeDemoSnippet;
