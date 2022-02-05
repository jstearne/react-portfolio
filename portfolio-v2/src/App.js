import logo from './logo.svg';
import background from "./img/background.jpg"; /* custom background image in src/img/ */
import './App.css'; /* import CSS app.css */
import Welcome from './components/Welcome';
import Project from './components/Project';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; /* Font Awesome icons */
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"; /* FA solid import */

// function-based components to refactor into Hooks if needed
function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundPosition:'center', }}  >
    {/* attachment fixed prevents image scroll */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* this looks amazing in app! */}

        {/* Welcome Component at top of page */}
        <Welcome name={'Jared'}  />

        {/* Pulsing down arrow to let users know to keep scrolling */}
        <FontAwesomeIcon className="down-arrow" icon={faAngleDoubleDown} size="lg" />
        
        {/* Project Components as needed: Wedding v2, v1, fidget, wayfarer, portfolio v1, v2 */}
        <Project 
          projectName={"My Wedding App"}
          blurb={"This was a great project and I enjoyed it! Built it and it works perfectly. Give it a visit."}

          tech1={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="python-logo" />  }
          tech2={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql-logo"/>  }
          tech3={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg" alt="django-logo"/>  }
          tech4={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="html5-logo"/>  }
          tech5={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="css3-logo"/>  }
         />

        <Project />

        <Project />

        <Project />

        {/* Credential Components as needed */}
        

        {/* link example, can delete
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and make a portfolio!
        </a>
         */}
         {/* scroll test */}
        <br/><br/><br/><br/><br/><br/>Sup?<br/><br/><br/><br/><br/><br/>Sup!
        <br/><br/><br/><br/><br/><br/>Sup?<br/><br/><br/><br/><br/><br/>Sup!
      </header>
    </div>
  );
}

export default App;
