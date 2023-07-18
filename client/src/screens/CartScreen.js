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
import CircularProgress from "@mui/material/CircularProgress";
import { connect } from "react-redux";

import getCartDetails from "actions/getCartDetails";
import setCartProductQuantity from "actions/setCartProductQuantity";
import removeProductFromCart from "actions/removeProductFromCart";
import goToCheckout from "actions/goToCheckout";
import Screen from "components/Screen";
import QuantityInput from "components/QuantityInput";
import getMediaFileUrl from "helpers/getMediaFileUrl";
import formatPrice from "helpers/formatPrice";

const CartScreen = ({
  cart,
  cartDetails,
  getCartDetails,
  setCartProductQuantity,
  removeProductFromCart,
  goToCheckout,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    getCartDetails(cart);
  }, [getCartDetails, cart]);

  //.map(product => detailedProduct.price * product.quantity

  const totalPrice = cartDetails.reduce(
    (accumulator, currentProduct, index) => {
      return accumulator + currentProduct.price * cart[index].quantity;
    },
    0
  );

  const intersectionMargin = "24px";

  return (
    <Screen>
      <h1>Cart</h1>
      {cart.length < 1 && <h3>No products in cart</h3>}
      {cart.map((product, index) => {
        const detailedProduct = cartDetails[index];
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {detailedProduct ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  gap: "40px",
                  paddingRight: "48px",
                }}
              >
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    backgroundImage: `url(${getMediaFileUrl(
                      product.id,
                      detailedProduct.mediaFilenames[0]
                    )})`,
                    backgroundSize: "cover",
                  }}
                />
                <Typography variant="h5" style={{ flexGrow: 1 }}>
                  {detailedProduct.title}
                </Typography>
                <QuantityInput
                  value={product.quantity}
                  onChange={(newQuantity) => {
                    // update cart
                    if (newQuantity > 0) {
                      setCartProductQuantity(cart, product.id, newQuantity);
                    }
                    /*
                    // remove product from cart
                    if (newQuantity <= 0) {
                      removeProductFromCart(cart, product.id);
                    }
                    */
                  }}
                />
                <Typography variant="h5" style={{ flexGrow: 0 }}>
                  {formatPrice(detailedProduct.price * product.quantity)}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeProductFromCart(cart, product.id)}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </div>
            )}
          </div>
        );
      })}
      {cart.length > 0 && cart.length === cartDetails.length && (
        <div
          style={{
            marginTop: intersectionMargin,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: "340px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="p" style={{ fontSize: 20 }}>
                  Subtotal:
                </Typography>
                <Typography variant="p" style={{ fontSize: 20 }}>
                  {formatPrice(totalPrice)}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="p" style={{ fontSize: 20 }}>
                  Shipping:
                </Typography>
                <Typography variant="p" style={{ fontSize: 20 }}>
                  {formatPrice(10)}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  style={{ width: "200px" }}
                >
                  Total:
                </Typography>
                <Typography variant="h5" fontWeight="600">
                  {formatPrice(totalPrice + 10)}
                </Typography>
              </div>
            </div>
            <Button
              variant="contained"
              fullWidth
              style={{ marginTop: intersectionMargin }}
              onClick={() => goToCheckout(cart)}
            >
              Go to checkout
            </Button>
          </div>
        </div>
      )}
    </Screen>
  );
};

const mapState = (state) => {
  const { cart, cartDetails } = state;
  return { cart, cartDetails };
};

export default connect(mapState, {
  getCartDetails,
  setCartProductQuantity,
  removeProductFromCart,
  goToCheckout,
})(CartScreen);
