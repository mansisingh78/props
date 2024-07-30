import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <Welcome name="mansi" age={21} arr={arr} />
    </>
  );
}

export default App;
