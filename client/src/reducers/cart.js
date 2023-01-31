import { SET_CART } from "constants/actionTypes";

const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return [...action.cart];
    default:
      return state;
  }
};

export default cart;
