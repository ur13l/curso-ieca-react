import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Han pasado {seconds} segundos</h2>
    </div>
  );
};

export default Timer;
