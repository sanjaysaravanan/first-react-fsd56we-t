import { useReducer } from "react";

const initialCounterState = {
  count: 99,
};

// Reducer Function
const counterReducer = (state = initialCounterState, action) => {
  switch (action) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return initialCounterState;
  }
  // if (action === "increment") {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // } else if (action === "decrement") {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // } else {
  //   return { count: 10000000 };
  // }
};

const ReducerComponent = () => {
  const [countState, dispatch] = useReducer(
    counterReducer,
    initialCounterState
  );

  return (
    <>
      <h1>Simple Click Counter Application</h1>
      <h1>{countState.count}</h1>
      <button onClick={() => dispatch("increment")}>Inc</button>
      <button onClick={() => dispatch("decrement")}>Dec</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
};

export default ReducerComponent;
