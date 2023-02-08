import { FETCH_WEATHER } from "./weatherActionTypes";

export const weatherDetails = city => {
  return {
    type: FETCH_WEATHER,
    payload: city,
  };
};
