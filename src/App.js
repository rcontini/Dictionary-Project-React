import "./App.css";
import axios from "axios";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>

        <Dictionary />

        <footer className="App-footer">
          <small>Coded by Rachele Contini</small>
        </footer>
      </div>
    </div>
  );
}
