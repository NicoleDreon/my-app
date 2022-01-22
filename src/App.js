import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const name = "Nicole";
  return (
    <div className='App'>
      <Welcome name={name} />
    </div>
  );
}

export default App;
