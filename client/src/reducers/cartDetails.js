import { SET_CART_DETAILS } from "constants/actionTypes";

const initialState = [];

// Stores detailed product information fetched from the API when the cart page is loaded, including name and media.
const cartDetails = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_DETAILS:
      return [...action.cartProducts];
    default:
      return state;
  }
};

export default cartDetails;
