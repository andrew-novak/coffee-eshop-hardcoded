import axios from "axios";

import { API_URL } from "constants/urls";
import { SET_CART_DETAILS } from "constants/actionTypes";

const getCartDetails = (cart) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/cart/details`, {
    cart,
  });
  const { cartProducts } = response.data;
  dispatch({ type: SET_CART_DETAILS, cartProducts });
};

export default getCartDetails;
