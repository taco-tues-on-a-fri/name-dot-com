import React from "react";
import "./index.css";
import ReactDom from "react-dom";
// import SnowFlakes from "./components/Snow";
// import Mountains from "./components/Mountains";

function App() {
  return (
    <React.Fragment>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="https://github.com/taco-tues-on-a-fri">
              <img src="./src/static/github-logo-face.svg" className="nav-logo"/>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="https://www.linkedin.com/in/mike-jadick/">
              <img src="./src/static/linked-in-logo.svg" className="nav-logo"/>
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <img className="waves" src="./src/static/cerulean-wave.svg" />
      </div>
      <div>
      <h1 className="greeting">Hi, I'm Michael Jadick</h1>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
