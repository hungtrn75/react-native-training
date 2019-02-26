import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { counterReducers, counterSagas } from "./counter";
const rootReducer = combineReducers({
  counterReducers
});
export default rootReducer;

export function* rootSaga() {
  console.log(counterSagas);
  yield all([...Object.values(counterSagas)].map(fork));
}
