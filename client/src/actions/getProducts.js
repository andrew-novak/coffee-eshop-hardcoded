import axios from "axios";

import { API_URL } from "constants/urls";
import { SET_PRODUCTS } from "constants/actionTypes";

const getProducts = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/products`);
  const { products } = response.data;
  dispatch({ type: SET_PRODUCTS, products });
};

export default getProducts;
