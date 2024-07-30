const Welcome = ({ name, age, arr }) => {
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
    </>
  );
};
export default Welcome;
