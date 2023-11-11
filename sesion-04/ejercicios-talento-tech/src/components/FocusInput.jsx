import { useRef, useState } from "react";

const FocusInput = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [values, setValues] = useState([]);

  const focus = (ref) => {
    ref.current.focus();
  };

  return (
    <>
      <div className="flex p-8 gap-4">
        <div>
          <input type="text" ref={ref1} />
          <button
            onClick={() => {
              focus(ref1);
            }}
          >
            Focus
          </button>
        </div>

        <div>
          <input type="text" ref={ref2} />
          <button
            onClick={() => {
              focus(ref2);
            }}
          >
            Focus
          </button>
        </div>

        <button
          onClick={() => {
            setValues([
              {
                value1: ref1.current.value,
                value2: ref2.current.value,
              },
              ...values,
            ]);

            ref1.current.value = "";
            ref2.current.value = "";

            focus(ref1);
          }}
        >
          Añadir valores
        </button>
      </div>
      <ul>
        {values.map((obj) => (
          <li key={obj.value1 + "_" + obj.value2}>
            {obj.value1} - {obj.value2}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FocusInput;
