import React from "react";
import "./index.css";
import ReactDom from "react-dom";

function App() {
  return (
    <React.Fragment>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="https://github.com/taco-tues-on-a-fri">
              <img src="https://sticky-haircut.s3.us-east-2.amazonaws.com/static/icon/github-logo-face.svg" className="nav-logo"/>
            </a>
          </li>
          <li className="nav-list-item">
            <a href="https://www.linkedin.com/in/mike-jadick/">
              <img src="https://sticky-haircut.s3.us-east-2.amazonaws.com/static/icon/linked-in-logo.svg" className="nav-logo"/>
            </a>
          </li>
        </ul>
      </nav>
      <img className="waves" src="https://sticky-haircut.s3.us-east-2.amazonaws.com/static/bk/cerulean-wave.svg" />
      <h1 className="greeting">Hi, I'm Michael Jadick</h1>
      <div className="card">
        <h2 className="card-title">Full Stack Developer</h2>
        <p>I specialize in taco related code.</p>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
