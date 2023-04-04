import { createStore } from "redux";

const stepCounter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(state);
      return state + 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

const store = createStore(stepCounter);

export default store;
