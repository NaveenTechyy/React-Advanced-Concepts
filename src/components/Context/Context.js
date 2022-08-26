import React, { useState, createContext } from "react";

//inside parenthesis default value is our wish
//manage the login info upto cart

export const MyContext = createContext({});
export const NewTestContext = createContext();
export const ThemeContext = createContext();

export const StateContext = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider
      value={{ count: count, name: "naveen", increment: increment }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
