import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  let num = [1, 2, 3, 4, 5];
  return (
    <>
      <Welcome num={(1, 2, 3, 4, 5)} />
    </>
  );
}

export default App;
