import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_WEATHER, SET_WEATHER } from "./weatherActionTypes";
import Axios from "axios";

function* fetchWeather(action) {
  try {
    // const url =
    //   "https://api.openweathermap.org/data/2.5/weather?q=vellore&appid=afd3ebf117a8bb8fee6c98e7c529e7a5";
    const city = action.payload;
    const APIkey = "afd3ebf117a8bb8fee6c98e7c529e7a5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    const result = yield call(Axios.get, url);
    yield put({ type: SET_WEATHER, value: result.data });
  } catch (e) {
    console.log("e", e);
  }
}

export const weatherSaga = function* () {
  yield takeEvery(FETCH_WEATHER, fetchWeather);
};
