const Welcome = ({ name, age, arr, info, names }) => {
  return (
    <>
      <h1>
        welcome {name}
        {age}
      </h1>
      {/* <h2>{arr}</h2> */}
      {arr.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
      <h2>{info.name}</h2>
      <h2>{info.age}</h2>
      {names.map((person, index) => (
        <div key={index}>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
        </div>
      ))}
    </>
  );
};
export default Welcome;
