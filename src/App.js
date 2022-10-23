import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>

        <Dictionary />

        <footer className="App-footer">
          <a
            href="https://github.com/rcontini/Dictionary-Project-React"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code
          </a>{" "}
          by Rachele Contini for
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            {" "}
            SheCodes
          </a>
        </footer>
      </div>
    </div>
  );
}
