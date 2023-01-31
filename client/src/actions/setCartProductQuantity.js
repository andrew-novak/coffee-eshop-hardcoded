import { SET_CART } from "constants/actionTypes";

const setCartProductQuantity = (cart, productId, quantity) => (dispatch) => {
  const index = cart.findIndex((product) => product.id === productId);
  const isAlredyInCart = index !== -1;
  const newCart = [...cart];
  if (isAlredyInCart) {
    newCart[index].quantity = quantity;
  } else {
    newCart.push({ id: productId, quantity });
  }
  dispatch({ type: SET_CART, cart: newCart });
};

export default setCartProductQuantity;
