import React from 'react'
import './index.css'
import ReactDom from 'react-dom'
const skillsJson = require('./static/json/skills.json')
const demos = {
  soundcloud:
    '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/379775672&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',

  plotly:
    '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',
  snippets:
    // '<iframe src="https://codesandbox.io/embed/js-snippets-template-e16qq?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="js-snippets-template" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'
    '<iframe src="https://codesandbox.io/embed/js-snippets-template-e16qq"></iframe>'
};

function Iframe ({ source }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: source ? source : "" }}
    />
  );
}

const getFontSize = (string) => {
  if (string.length >= 15 && string.length <= 20) {
    return 'font-small'  
  } else if (string.length >= 21 && string.length <= 29) {
    return 'font-extra-small'
  } else if (string.length > 29) {
    return 'font-extra-extra-small'
  } else {
    return 'font-normal'
  }
}
function SkillList ({ categoryKey, categoryArray }) {
  
  const getCategoryStyle = (categoryKey) => {
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
        <li key={item} className={`skills-list-item ${getFontSize(item)} ${getCategoryStyle(categoryKey)}`}>{item}</li>
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
      <h1 className="greeting">Hi, I'm Michael Jadick</h1>
      <div className="utility-padding-2" />
      <div className="card flex-horizontal-margins">
        <h2 className="card-title">Full Stack Developer</h2>
        <p className="card-body-text">Currently working at MeetKai as a front end developer.</p>
      </div>
      <section className="skills-section flex-horizontal-margins">
        <header className="skills-header">
          <h2 className="skills-header-title">Skills</h2>
          <hr className="skills-header-underline" />
        </header>
        <div className="list-container">
          <h3 className="list-title">Languages</h3>
          <SkillList 
            categoryKey="language"
            categoryArray={skillsJson.language}
          />
        </div>
        <div className="list-container">
          <h3 className="list-title">Frameworks & Libraries</h3>
          <SkillList 
            categoryKey="framework_library"
            categoryArray={skillsJson.framework_library}
          />
        </div>
        <div className="list-container">
          <h3 className="list-title">Tools & Services</h3>
          <SkillList 
            categoryKey="tool"
            categoryArray={skillsJson.tool}
          />
        </div>
        <div className="list-container">
          <h3 className="list-title">Cloud Services</h3>
          <SkillList 
            categoryKey="cloud"
            categoryArray={skillsJson.cloud}
          />
        </div>
        <div className="list-container">
          <h3 className="list-title">Databases</h3>
          <SkillList 
            categoryKey="database"
            categoryArray={skillsJson.database}
          />
        </div>
      </section>
      <section>
        <Iframe source={demos["snippets"]} allow="autoplay" />,
      </section>
    </React.Fragment>
  )
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)
