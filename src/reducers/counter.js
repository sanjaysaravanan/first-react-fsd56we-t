const initialCounterState = {
  count: 0,
};

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
};

export default counterReducer;
