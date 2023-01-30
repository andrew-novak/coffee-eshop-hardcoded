import { SET_PRODUCTS } from "constants/actionTypes";

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.products];
    default:
      return state;
  }
};

export default products;
