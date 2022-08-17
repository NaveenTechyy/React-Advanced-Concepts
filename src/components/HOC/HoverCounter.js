import React from "react";
import PropTypes from "prop-types";

const HoverCounter = (props) => {
  const { count, increment, name } = props;

  return (
    <h2 onMouseOver={increment} style={{ cursor: "pointer" }}>
      {name} Hovered {count} times
    </h2>
  );
};

HoverCounter.propTypes = {
  increment: PropTypes.func,

  count: PropTypes.any,

  name: PropTypes.string,
};

export default HoverCounter;
