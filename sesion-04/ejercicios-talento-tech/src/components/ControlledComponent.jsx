import { useState } from "react";

const ControlledComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);

  const addElement = () => {
    setValues([...values, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div className="p-4 flex gap-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={addElement}>Añadir elemento</button>
      </div>
      <ul>
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </>
  );
};

export default ControlledComponent;
