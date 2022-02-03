import logo from './logo.svg';
import background from "./img/background.jpg"; /* custom background image */
import './App.css';

// how to input background color here? I think this is correct (styles) but overwritten by standard CSS.
function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${background})`, height:'auto', width:'auto', backgroundRepeat:'no-repeat', backgroundAttachment:'fixed', backgroundPosition:'center', }}  >
      <header className="App-header"> {/* this is setting css for App */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Test the new font...</h1>
        <h2 className="alternate-font">in Paradise!</h2>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and make a portfolio!
        </a>
      </header>
    </div>
  );
}

export default App;
