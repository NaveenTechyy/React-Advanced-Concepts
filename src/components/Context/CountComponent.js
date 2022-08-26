import React, { useContext } from "react";
import { MyContext, NewTestContext } from "./Context";

//React useContext method

export const CountComponent = () => {
  const myContext = useContext(MyContext);
  const testContext = useContext(NewTestContext);
  return (
    <>
      <p>Hello</p>
      <p>MyContext:{myContext.name}</p>
      <p>TestContext:{testContext.test}</p>
    </>
  );
};
