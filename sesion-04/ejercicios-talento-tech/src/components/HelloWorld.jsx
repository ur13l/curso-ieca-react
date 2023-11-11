import { useTimerContext } from "../context/TimerContext";

const HelloWorld = () => {
  const { time } = useTimerContext();

  return (
    <>
      <h2>Hello World</h2>
      <p>{time}</p>
    </>
  );
};

export default HelloWorld;

// export default function HelloWorld() {
//   return <h2>Hello World</h2>;
// }
