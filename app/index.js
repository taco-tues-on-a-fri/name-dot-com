import React from "react";
import "./index.css";
import ReactDom from "react-dom";
import SnowFlakes from "./components/Snow";

function App() {
  return (
    <React.Fragment>
      <h1>name-dot-com</h1>
    </React.Fragment>
  );
}

// render(<App />, document.getElementById("root"));
const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
