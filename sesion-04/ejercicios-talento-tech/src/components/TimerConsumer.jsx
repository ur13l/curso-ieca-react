import { useTimerContext } from "../context/TimerContext";

const TimerConsumer = () => {
  const { time, reset } = useTimerContext();
  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl">Timer Consumer</h1>
      <p className="font-bold text-2xl">{time}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TimerConsumer;
