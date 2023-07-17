import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  ButtonBase,
  Typography,
  Button,
} from "@mui/material";
import { connect } from "react-redux";

import getCartDetails from "actions/getCartDetails";
import goToCheckout from "actions/goToCheckout";
import Screen from "components/Screen";
import getMediaFileUrl from "helpers/getMediaFileUrl";

const CartScreen = ({ cart, cartDetails, getCartDetails, goToCheckout }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    getCartDetails(cart);
  }, [getCartDetails, cart]);

  console.log("cartDetails:", cartDetails);

  return (
    <Screen>
      <h1>Cart</h1>
      {cart.length < 1 && <h3>No products in cart</h3>}
      {cart.map((product, index) => (
        <div key={index}>
          {cartDetails[product.id] ? (
            <div
              style={{
                paddingTop: theme.custom.heightPercentRatios["1:1"],
                backgroundImage: `url(${getMediaFileUrl(
                  product.id,
                  cartDetails[product.id].mediaFilenames[0]
                )})`,
                backgroundSize: "cover",
              }}
            />
          ) : (
            <div>Loading...</div>
          )}
          id: {product.id}, quantity: {product.quantity}
        </div>
      ))}
      <Button disabled={cart.length < 1} onClick={() => goToCheckout(cart)}>
        Go to checkout
      </Button>
    </Screen>
  );
};

const mapState = (state) => {
  const { cart, cartDetails } = state;
  return { cart, cartDetails };
};

export default connect(mapState, { getCartDetails, goToCheckout })(CartScreen);
