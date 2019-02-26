import { DECREMENT, INCREMENT } from "./types";

//Action: "increase counter "
export const increaseAction = (step: number) => {
  return {
    type: INCREMENT,
    step: step
  };
};
//Action: "decrease counter "
export const decreaseAction = (step: number) => {
  return {
    type: DECREMENT,
    step: step
  };
};
