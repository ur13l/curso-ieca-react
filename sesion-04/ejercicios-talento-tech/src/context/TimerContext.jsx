import { createContext, useContext, useState, useEffect } from "react";

const TimerContext = createContext();

export const useTimerContext = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [formattedTime, setFormattedTime] = useState("00:00:00");

  const reset = () => {
    setSeconds(0);
    setFormattedTime("00:00:00");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    setFormattedTime(
      `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${secondsLeft}`
    );
  }, [seconds]);

  return (
    <TimerContext.Provider value={{ time: formattedTime, reset }}>
      {children}
    </TimerContext.Provider>
  );
};
