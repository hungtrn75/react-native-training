import { DECREMENT, INCREMENT } from "./types";

interface IAction {
  type: string;
  step: number;
}

const counterReducers = (state: number = 0, action: IAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.step;
    case DECREMENT:
      return state - action.step;

    default:
      return state;
  }
};

export default counterReducers;
