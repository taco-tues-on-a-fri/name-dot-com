import React from 'react'
import './index.css'
import ReactDom from 'react-dom'
const skillsJson = require('./static/json/skills.json')

function SkillList ({ categoryKey, categoryArray }) {
  
  const getCategoryStyle = (categoryKey) => {
    console.log('getCategoryStyle: key:', categoryKey)
    let style = ''
    switch(categoryKey) {
    case 'language':
      style = 'skills-list-item--languages'
      break;
    case 'framework_library':
      style = 'skills-list-item--framework-library'
      break;
    case 'tool':
      style = 'skills-list-item--tool'
      break;
    case 'database':
      style = 'skills-list-item--database'
      break;
    case 'cloud':
      style = 'skills-list-item--cloud'
      break;
    default:
      style = 'skills-list-item--languages'
    }
    return style
  }

  return (
    <ul className="skills-list">
      {categoryArray.map((item) => (
        <li key={item} className={`skills-list-item ${getCategoryStyle(categoryKey)}`}>{item}</li>
      ))}
    </ul>
  )
}

function App () {
  return (
    <React.Fragment>
      <img className="waves" src="https://sticky-haircut.s3.us-east-2.amazonaws.com/static/bk/cerulean-wave.svg" />
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
      <div className="utility-padding-2" />
      <h1 className="greeting">Hi, I'm Michael Jadick</h1>
      <div className="utility-padding-3" />
      <div className="card">
        <div className="utility-padding-3" />
        <h2 className="card-title">Full Stack Developer</h2>
        <div className="utility-padding-1" />
        <div className="utility-padding-3" />
        <p className="card-body-text">Currently working at MeetKai as a front end developer.</p>
        <div className="utility-padding-2" />
      </div>
      <section className="skills-section">
        <div className="utility-padding-3" />
        <header className="skills-header">
          <h2 className="skills-header-title">Skills</h2>
          <div className="utility-padding-1" />
          <hr className="skills-header-underline" />
        </header>
        <div className="utility-padding-2" />
        <div className="list-container">
          <h3 className="list-subheader">Languages</h3>
          <SkillList 
            categoryKey="language"
            categoryArray={skillsJson.language}
          />
        </div>
        <div className="list-container">
          <h3 className="list-subheader">Frameworks & Libraries</h3>
          <SkillList 
            categoryKey="framework_library"
            categoryArray={skillsJson.framework_library}
          />
        </div>
        <div className="list-container">
          <h3 className="list-subheader">Tools & Services</h3>
          <SkillList 
            categoryKey="tool"
            categoryArray={skillsJson.tool}
          />
        </div>
        <div className="list-container">
          <h3 className="list-subheader">Cloud Services</h3>
          <SkillList 
            categoryKey="cloud"
            categoryArray={skillsJson.cloud}
          />
        </div>
        <div className="list-container">
          <h3 className="list-subheader">Databases</h3>
          <SkillList 
            categoryKey="database"
            categoryArray={skillsJson.database}
          />
        </div>
      </section>
    </React.Fragment>
  )
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)
