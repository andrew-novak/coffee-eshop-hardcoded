import { SET_CART } from "constants/actionTypes";

const initialState = [];

// Contains only minimal cart details that persist (stored in the browser), such as product ID and quantity.
const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return [...action.cart];
    default:
      return state;
  }
};

export default cart;
