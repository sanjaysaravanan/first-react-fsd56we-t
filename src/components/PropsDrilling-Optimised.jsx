/* eslint-disable react/prop-types */
import React from "react";

const ChildC = () => {
  const [count, setCount] = React.useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <>
      {console.log("rendering child C")}

      <h1>Child C</h1>
      <h2>{count}</h2>
      <button onClick={handleInc}>Inc</button>
    </>
  );
};

const ChildB = () => {
  return (
    <>
      {console.log("rendering child B")}

      <h1>Child B</h1>
      <ChildC />
    </>
  );
};

const ChildA = () => {
  return (
    <>
      {console.log("rendering child A")}

      <h1>Child A</h1>
      <ChildB />
    </>
  );
};

const Parent = () => {
  return (
    <>
      {console.log("rendering parent")}
      <h1>Parent Component</h1>
      <ChildA />
    </>
  );
};

export default Parent;
