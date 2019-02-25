//Saga effects
import { takeEvery } from "redux-saga/effects";
import { DECREMENT, INCREMENT } from "./types";

function* increment() {
  yield;
  console.log(`This is increment saga`);
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  yield;
  console.log(`This is decrement saga`);
}

export function* watchDecrement() {
  console.log(`watchDecrement saga`);
  yield takeEvery(DECREMENT, decrement);
}
