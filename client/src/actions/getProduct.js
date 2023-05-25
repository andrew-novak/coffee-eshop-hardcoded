import axios from "axios";

import { API_URL } from "constants/urls";
import { SET_PRODUCT } from "constants/actionTypes";

const getProduct = (productId) => async (dispatch) => {
  const response = await axios.get(`${API_URL}/products/${productId}`);
  const { product } = response.data;
  console.log("### product:", product);
  dispatch({ type: SET_PRODUCT, product });
};

export default getProduct;
