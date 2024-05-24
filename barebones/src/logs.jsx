// Logs.jsx
import React from "react";
import Sidebar from "./sidebar";
import LogComponent from "./LogComponent";
import Viewer from "./Viewer";
import Component3 from "./Component2";
import Component4 from "./Component4";
import "./logs.css";

function Logs() {
  return (
    <div className="logs-container">
      <Sidebar />
      <div className="logs-content">
        <div className="grid-container">
          <div className="grid-item">
            <LogComponent />
          </div>
          <div className="grid-item">
            <Viewer />
          </div>
          <div className="grid-item">
            <Component3 />
          </div>
          <div className="grid-item">
            <Component4 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logs;
