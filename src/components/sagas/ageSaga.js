import { delay } from "redux-saga";
import { takeLatest, put, takeEvery } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(4000);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync); //whenever AGE_UP action comes it'll call the ageUpAsync function
}

//whenever we're dispatching an action store will check the middleware first

///////////////////////////////////////

// function* test() {
//   console.log("Created");
//   const a = yield "please enter a number";
//   console.log("value of a", a);
// }

// const x = test(); //Initially a instance will created
// x.next(); //while calling next actual execution happens
// x.next(100);

// console.log(x.next()); ///Returns two parameters value & done, done will tell whether the generator func ends or not so here fone false
// console.log(x.next(100)); ///done true because all generator ended

// ///o/p: Created until 20
// ///after Created
// ///     Value of a 100 on line 21

// function* increment() {
//   let counter = 0;
//   while (true) {
//     yield ++counter;
//   }
// }

// //While(true) is an infinite loop but we can give it to yield

// const y = increment();

// console.log(y.next());
// console.log(y.next());
// console.log(y.next(100));

//Generator function will stops at yield untile it receives a next and holds the execution context like value
//Speciality of generator func is it will resume where it stops
