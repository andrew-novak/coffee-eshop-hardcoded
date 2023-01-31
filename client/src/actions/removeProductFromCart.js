import { SET_CART } from "constants/actionTypes";

const removeProductFromCart = (cart, productId) => (dispatch) => {
  const newCart = [...cart];
  const foundIndex = newCart.findIndex((product) => product.id === productId);
  if (foundIndex > -1) {
    newCart.splice(foundIndex, 1);
  }
  dispatch({ type: SET_CART, cart: newCart });
};

export default removeProductFromCart;
