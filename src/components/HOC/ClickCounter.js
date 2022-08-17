import React from "react";
import PropTypes from "prop-types";

const ClickCounter = (props) => {
  const { count, increment } = props;

  return (
    <>
      <button
        style={{
          background: "orange",
          padding: "20px",
          borderRadius: "5px",
          margin: "20px",
          cursor: "pointer",
        }}
        onClick={increment}
      >
        Click {count} times
      </button>
    </>
  );
};

ClickCounter.propTypes = {
  increment: PropTypes.func,

  count: PropTypes.any,
};

export default ClickCounter;
