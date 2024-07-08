import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(10);
  const addValue = () => {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };
  const removeValue = () => {
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
    setCounter((counter) => counter - 1);
  };
  return (
    <div className="font-bold text-2xl m-6 ">
      Counter : {counter}
      <br />
      <button onClick={addValue} className="border-black m-2 mt-8 ">
        Add +
      </button>
      <button onClick={removeValue} className="border-black ">
        remove -
      </button>
    </div>
  );
};
export default Counter;
