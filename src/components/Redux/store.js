import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//npm i redux-logger
import logger from "redux-logger";
import rootReducer from "./rootReducer";

///logger is used to log the statement in console

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
