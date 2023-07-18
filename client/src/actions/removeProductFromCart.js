import { SET_CART, SET_CART_DETAILS } from "constants/actionTypes";

const removeProductFromCart = (cart, productId, optionalCartDetails) => (
  dispatch
) => {
  const newCart = [...cart];
  const foundIndex = newCart.findIndex((product) => product.id === productId);
  if (foundIndex > -1) {
    newCart.splice(foundIndex, 1);
  }
  let newCartDetails = undefined;
  if (optionalCartDetails) {
    newCartDetails = [...optionalCartDetails];
    newCartDetails.splice(foundIndex, 1);
  }
  dispatch({ type: SET_CART, cart: newCart });
  dispatch({ type: SET_CART_DETAILS, cartDetails: newCartDetails });
};

export default removeProductFromCart;
