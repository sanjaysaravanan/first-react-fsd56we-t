/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Step 1. Creation
const CounterContext = createContext(null);

const ChildC = () => {
  // const context = useContext(CounterContext);

  const { count, handleInc } = useContext(CounterContext);

  return (
    <>
      {console.log("rendering child C")}

      <h1>Child C</h1>
      {/* <h2>{context.count}</h2>
      <button onClick={context.handleInc}>Inc</button> */}
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
  const [count, setCount] = useState(1000);

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, handleInc }}>
      {console.log("rendering parent")}
      <h1>Parent Component</h1>
      <ChildA />
    </CounterContext.Provider>
  );
};

export default Parent;
