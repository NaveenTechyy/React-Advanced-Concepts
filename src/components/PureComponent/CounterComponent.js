import React, { useState } from "react";
import CustomLabel from "./CustomLabel";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <CustomLabel name="Simple Counter app using Memo for functional based component" />
      <p>Counter is : {counter} </p>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => setCounter(counter + 1)}
      >
        Click
      </button>
    </div>
  );
};
export default CounterComponent;
