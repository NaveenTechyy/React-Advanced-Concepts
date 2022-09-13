import axios from "axios";
import { FETCH_USERS_REQUEST } from "./userTypes";
import { FETCH_USERS_SUCCESS } from "./userTypes";
import { FETCH_USERS_FAILURE } from "./userTypes";

//action creator will return action normally
//thunkMiddleware will give tha ability to return a function with a dispatch argument from store.js

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
