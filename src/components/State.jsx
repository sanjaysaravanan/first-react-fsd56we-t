import { useState } from "react";

const State = () => {
  // let count = 99;

  // const handleInc = () => {
  //   count = count + 1;
  //   alert("Inc Function" + count);
  //   console.log("Inc Function" + count);
  // };

  // Using state hooks to handle the state changes and re-rendering
  const [count, setCount] = useState(199);

  const handleInc = () => {
    // async operation which gets modified after some milliseconds

    const temp = count + 1;

    setCount(temp);

    // immediately next won't have the updated value of count
    // count in the JS will get updated only just before the re-rendering
    console.log("count val", temp);
  };

  return (
    <>
      {console.log("State Component JSX Rendering")}
      <h1>{count}</h1>
      <button onClick={handleInc}>Inc</button>
    </>
  );
};

export default State;
