import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const biodata = {
    name: "shradha",
    age: 23,
  };
  const names = [
    {
      name: "shradha",
      age: 23,
    },
    {
      name: "hitesh",
      age: 32,
    },
  ];

  let arr = [1, 2, 3, 4, 5];
  return (
    <>
      <Welcome name="shradha" age={21} arr={arr} info={biodata} names={names} />
    </>
  );
}

export default App;
