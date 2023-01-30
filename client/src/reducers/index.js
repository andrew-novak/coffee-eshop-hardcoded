import { combineReducers } from "redux";

import products from "./products";
import { RESET_STATE } from "constants/actionTypes";

const appReducer = combineReducers({
  products,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
