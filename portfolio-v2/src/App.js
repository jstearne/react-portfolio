import logo from './logo.svg';
import background from "./img/background.jpg"; /* custom background image in src/img/ */
import './App.css'; /* import CSS app.css */
import Welcome from './components/Welcome';
import Project from './components/Project';

// function-based components to refactor into Hooks if needed
function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${background})`, backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundPosition:'center', }}  >
    {/* attachment fixed prevents image scroll */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* this looks amazing in app! */}

        {/* Welcome Component at top of page */}
        <Welcome name={'Jared'}  />

        {/* Project Components as needed */}
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
