import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const user = {
    firstName: "Nicole",
    lastName: "Dreon",
  };
  return (
    <div className='App'>
      <Welcome firstName={user.firstName} lastName={user.lastName} />
    </div>
  );
}

export default App;
