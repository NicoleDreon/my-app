import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const user = {
    firstName: "Nicole",
    lastName: "Dreon",
  };
  const test = 342;
  return (
    <div className='App'>
      <Welcome
        firstName={user.firstName}
        lastName={user.lastName}
        test={test}
      />
    </div>
  );
}

export default App;
