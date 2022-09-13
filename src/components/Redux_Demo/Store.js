// import { logger } from "redux-logger";

// const redux = require("redux");
// const createStore = redux.createStore;
// const combineReducer = redux.combineReducers;

// const applyMiddleware = redux.applyMiddleware;

// const BUY_CAKE = "BUY_CAKE";
// const BUY_ICECREAM = "BUY_ICECREAM";

// const buyCake = () => {
//   return {
//     type: BUY_CAKE,
//     info: "First Redux Action",
//   };
// };

// const buyIceCream = () => {
//   return {
//     type: BUY_ICECREAM,
//     info: "Second Redux Action",
//   };
// };

// const initCakeState = {
//   numOfCakes: 10,
// };

// const initIceCreamState = {
//   numOfIceCream: 20,
// };

// const cakeReducer = (state = initCakeState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     default:
//       return state;
//   }
// };

// const iceCreamReducer = (state = initIceCreamState, action) => {
//   switch (action.type) {
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream - 1,
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducer({
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
// });

// //Logger is used to check the log statement ---> Logger is a middleware
// //Import logger--->pass logger as an arg to store
// //pass the middleware inside applyMiddleware

// export const store = createStore(rootReducer, applyMiddleware(logger));

// console.log("Initial State", store.getState());

// const unsubscribe = (store.subscribe = () => {
//   console.log("Updated state", store.getState());
// });

// const unsubscribe = (store.subscribe = () => {});

// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());

// unsubscribe();
