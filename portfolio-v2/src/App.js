import logo from './logo.svg';
import './App.css';

// how to input background color here? I think this is correct but overwritten by standard CSS.
function App() {
  return (
    <div className="App" styles={{ backgroundColor:`red` }} >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
