import axios from "axios";

import { API_URL } from "constants/urls";

const goToCheckout = (cart) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/create-checkout-session`, {
    cart,
  });
  console.log("response.data:", response.data);
  const { checkoutUrl } = response.data;
  window.location.replace(checkoutUrl);
};

export default goToCheckout;
