import React from "react";
import TestContext from "./TestContext";

const HelloContext = (props) => {
  const { increment, count } = props;
  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>{count}</p>
      <TestContext count={count} />
    </div>
  );
};

export default HelloContext;
