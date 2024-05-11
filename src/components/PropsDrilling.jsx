/* eslint-disable react/prop-types */
import React from "react";

const ChildC = ({ count }) => {
  return (
    <>
      {console.log("rendering child C")}

      <h1>Child C</h1>
      <h2>{count}</h2>
    </>
  );
};

const ChildB = ({ count }) => {
  return (
    <>
      {console.log("rendering child B")}

      <h1>Child B</h1>
      <ChildC count={count} />
    </>
  );
};

const ChildA = ({ count }) => {
  return (
    <>
      {console.log("rendering child A")}

      <h1>Child A</h1>
      <ChildB count={count} />
    </>
  );
};

const Parent = () => {
  const [count, setCount] = React.useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <>
      {console.log("rendering parent")}
      <h1>Parent Component</h1>
      <ChildA count={count} />
      <button onClick={handleInc}>Inc</button>
    </>
  );
};

export default Parent;
