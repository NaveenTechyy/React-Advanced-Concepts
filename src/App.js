import React, { useState } from "react";
// Components
import Header from "./components/Header";
import Home from "./components/Home";

import HelloContext from "./components/Context/HelloContext";
import {
  MyContext,
  StateContext,
  NewTestContext,
  ThemeContext,
} from "./components/Context/Context";

import { CountComponent } from "./components/Context/CountComponent";

import ThemedButton from "./components/Context/ThemedButton";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const App = () => {
  const [count, setCount] = useState(0);

  const themeChange = () => {
    if (count == 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    //1.create a named export --->Context.js
    //2.Provide in app.js
    //3.Consume in ThemedBuutton.js

    <StateContext>
      <NewTestContext.Provider value={{ test: "naveen" }}>
        <div className="App">
          <HelloContext />
          <CountComponent />
        </div>
      </NewTestContext.Provider>
    </StateContext>

    // <ThemeContext.Provider
    //   value={{ themes, themeChange: themeChange, count: count }}
    // >
    //   <ThemedButton />
    // </ThemeContext.Provider>
  );
};

export default App;
