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
        
        projectName={"MC Gusto"}
        technologies={ 
        // List all of the devicon logos for a specific project here!
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          
          
        }
        blurb={"This was a great project andd I enjoyed it!"}

         />
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
