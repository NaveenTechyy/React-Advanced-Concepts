import React, { useState } from "react";

const HocCounter = (OriginalComponent) => {
  const UpdatedClick = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return <OriginalComponent count={count} increment={increment} {...props} />;
  };

  return UpdatedClick;
};

export default HocCounter;
