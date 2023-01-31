import { SET_PRODUCT } from "constants/actionTypes";

const initialState = {
  id: null,
  title: null,
  price: null,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...action.product };
    default:
      return state;
  }
};

export default products;
