import { takeEvery, call, put } from "redux-saga/effects";
import {
  SET_USERS,
  GET_USERS,
  // GET_USERS_STARTED,
  // GET_USERS_FAILED,
} from "../actions/index";
import Axios from "axios";

function* workerGetUsers() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const result = yield call(Axios.get, url);
    yield put({ type: SET_USERS, value: result.data });
  } catch (e) {
    console.log("e", e);
  }
}

export const watchGetUsers = function* () {
  yield takeEvery(GET_USERS, workerGetUsers);
};
