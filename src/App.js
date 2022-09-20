import React, { Component } from "react";
import "./App.css";
import AgeContainer from "./components/AgeContainer";
import UserContainer from "./components/UserContainer";

class App extends Component {
  render() {
    return (
      <div>
        <AgeContainer />
        <UserContainer />
      </div>
    );
  }
}

export default App;
