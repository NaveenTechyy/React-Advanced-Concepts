import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import weatherReducer from "./weatherReducer";
import { weatherSaga } from "./weatherSaga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(weatherReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(weatherSaga);

export default store;
