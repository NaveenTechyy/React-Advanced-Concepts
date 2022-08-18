import React, { useRef } from "react";
// Components
import Header from "./components/Header";
import Home from "./components/Home";

import { useTranslation } from "react-i18next";
import "./locales/index";

import EnhancedBorder from "./components/HOC/EnhancedBorder";

import Hello from "./components/HOC/Hello";
import Test from "./components/HOC/Test";

import HocCounter from "./components/HOC/HocCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import ClickCounter from "./components/HOC/ClickCounter";

import PureClassComponent from "./components/PureComponent/PureClassComponent";
import CounterComponent from "./components/PureComponent/CounterComponent";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  ///Forward ref on Hello.js
  const ref = useRef();

  const clickHandler = () => {
    ref.current.focus();
  };

  ///HOC
  const UpdatedBorder = EnhancedBorder(Hello);
  const UpdatedBorderTest = EnhancedBorder(Test);
  const UpdatedHoverCounter = HocCounter(HoverCounter);
  const UpdatedClickCounter = HocCounter(ClickCounter);

  return (
    <div className="App">
      {/* <Header />
      <Home />
      <GlobalStyle /> */}

      {/* PureComponent */}
      <PureClassComponent />
      <CounterComponent />

      {/* HOC */}

      {/* <Hello ref={ref} />
      <button onClick={clickHandler}>Focus Input</button>
      <UpdatedBorder />
      <hr />
      <UpdatedBorderTest />
      <hr />
      <UpdatedHoverCounter name="Naveen" />
      <hr />
      <UpdatedClickCounter /> */}
    </div>
  );
};

export default App;
