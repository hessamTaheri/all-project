import { useReducer } from "react";
import CountContext from "./CountContext";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
const CountProvider = (props) => {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default CountProvider;
