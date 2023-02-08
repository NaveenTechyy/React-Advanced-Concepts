import { SET_WEATHER } from "./weatherActionTypes";

// const initialState = {
//   temp: [],
// };

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return [action.value];
    }
    default:
      return state;
  }
};

export default weatherReducer;
