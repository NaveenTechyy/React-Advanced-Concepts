import React from "react";
import { MyContext, NewTestContext } from "./Context";

const TestContext = (props) => {
  // const { count } = props;

  //Context API not a useContext from React Hook

  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <NewTestContext.Consumer>
            {(testContext) => {
              return (
                <>
                  <p>{testContext.test}</p>
                  <p>{context.count}</p>
                  <button onClick={context.increment}>Increment</button>
                </>
              );
            }}
          </NewTestContext.Consumer>
        );
      }}
    </MyContext.Consumer>
  );
};

export default TestContext;
