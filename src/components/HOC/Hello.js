import React from "react";

const Hello = React.forwardRef((props, ref) => {
  return (
    <>
      <div>Hello</div>
      <input type="text" ref={ref} />
    </>
  );
});

export default Hello;
