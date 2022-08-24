import React, { useState } from "react";

// Takes the input value from internal state
const Controlled = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value.toUpperCase());
    console.log(value);
  };
  const handleSubmit = (event) => {
    alert("A name was submitted controlled: " + value);
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {"Name:"}
          <input type="text" onChange={handleChange} value={value} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Controlled;
