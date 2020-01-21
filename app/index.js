import React from "react";
import "./index.css";
import ReactDom from "react-dom";
import SnowFlakes from "./components/Snow";
import Mountains from "./components/Mountains";

function App() {
  return (
    <React.Fragment>
      <SnowFlakes>
        <Mountains/>
      </SnowFlakes>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
