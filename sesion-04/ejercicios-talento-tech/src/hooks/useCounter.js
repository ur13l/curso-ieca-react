import { useReducer } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useReducer((state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialValue;
      default:
        return state;
    }
  }, initialValue);

  const increment = () => {
    setCounter("increment");
  };

  const decrement = () => {
    setCounter("decrement");
  };

  const reset = () => {
    setCounter("reset");
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
