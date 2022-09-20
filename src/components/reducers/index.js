import { combineReducers } from "redux";
import ageReducer from "../reducers/ageReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  age: ageReducer,
  users: userReducer,
});

export default reducer;
