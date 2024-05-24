// Component3.jsx
import React from "react";
import './viewer.css'
function Viewer() {
  return (
    <div className="log-viewer-main">
      {/* Log navigation buttons or tabs */}
      <div className="log-viewer-navigation">
        {/* Add your navigation buttons or tabs here */}
        <button className="log-viewer-btn">Log 1</button>
        <button className="log-viewer-btn">Log 2</button>
      </div>
      <div className="log-viewer-viewer" id="unikk">
        <textarea
          className="log-viewer-textarea"
          placeholder="Log viewer"
          rows="10"
          cols="50" 
          ></textarea>
      </div>
    </div>

  );
}

export default Viewer;
