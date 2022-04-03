import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Íme a játékos oktatás weboldalunk.</p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reactt oktatóvideó
        </a>
      </header>
    </div>
  );
}

export default App;
