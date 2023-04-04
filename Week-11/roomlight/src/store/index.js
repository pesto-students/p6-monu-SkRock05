import { createStore } from "redux";

const reducerFn = (state = { toggle: false }, action) => {
  if (action.type === "TOGGLE") {
    return { initialValue: !state.initialValue };
  }
  return state;
};

const store = createStore(reducerFn);

export default store;
