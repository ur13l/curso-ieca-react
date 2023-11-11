import { useCounter } from "../hooks/useCounter";

const CounterWithHook = ({ initialState }) => {
  const { counter, increment, decrement, reset } = useCounter(initialState);

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">CounterWithHook</h1>
      <p className="text-2xl font-bold">{counter}</p>
      <div className="flex gap-2">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterWithHook;
