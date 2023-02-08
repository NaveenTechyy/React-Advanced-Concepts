import React from "react";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import { Provider } from "react-redux";
// import store from "./components/Redux/store";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import WeatherConatiner from "./components/Weather/weatherConatiner";
import store from "./components/Weather/Redux-saga/store";

// import { store } from "./components/Redux/Store";

// import { store } from "./components/Redux/asyncActions";

///Provider is used to connect the redux to application

const App = () => {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     {/* <CakeContainer />
    //     <IceCreamContainer />
    //     <NewCakeContainer />
    //     <ItemContainer cake />
    //     <ItemContainer /> */}

    //     <UserContainer />
    //   </div>
    // </Provider>
    <>
      <Provider store={store}>
        <WeatherConatiner />
      </Provider>
    </>
  );
};

export default App;
