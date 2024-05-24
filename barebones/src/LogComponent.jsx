// LogComponent.jsx
import React from "react";
import AceEditor from "react-ace"
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';
function LogComponent() {
  return (
    <div className="log-component">
      {/* Log navigation buttons or tabs */}
      <div className="log-navigation">
        {/* Add your navigation buttons or tabs here */}
        <button>Log 1</button>
        <button>Log 2</button>
      </div>
      
      {/* Log viewer */}
      <div className="log-viewer" id="unikk">
        {/* Add your log viewer component here */}
        {/* For example, a textarea to display logs */}
        <AceEditor
          mode="java"
          theme="github"
          name="unikk"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </div>
  );
}

export default LogComponent;
