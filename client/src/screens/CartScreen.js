import { useEffect } from "react";
import {
  useMediaQuery,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteIcon from "@mui/icons-material/Delete";
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

  // vertical margins around summary info section (subtotal/shipping/total section)
  const summaryInfoMargins = "24px";

  const isLargerScreen = useMediaQuery("(min-width: 700px)");
  const isLargestScreen = useMediaQuery("(min-width: 1100px)");
  //const isLargerScreen = useMediaQuery(theme.breakpoints.up("sm"));
  //const isLargestScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Screen>
      <h1>Cart</h1>
      {cart.length < 1 && (
        <Typography sx={{ fontSize: 22 }}>
          Your shopping cart is currently empty
        </Typography>
      )}
      {cart.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "white",
                      gap: "16px",
                      paddingRight: 0,
                      paddingBottom: "16px",
                      boxShadow: 2,
                      ...(isLargerScreen
                        ? {
                            flexDirection: "row",
                            gap: "8px",
                            paddingRight: "8px",
                            paddingBottom: 0,
                          }
                        : {}),
                      ...(isLargestScreen
                        ? {
                            gap: "40px",
                            paddingRight: "48px",
                          }
                        : {}),
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        height: 0,
                        width: "100%",
                        paddingTop: "100%",
                        backgroundImage: `url(${getMediaFileUrl(
                          product.id,
                          detailedProduct.mediaFilenames[0]
                        )})`,
                        backgroundSize: "cover",
                        ...(isLargerScreen
                          ? {
                              height: "120px",
                              width: "120px",
                              paddingTop: 0,
                            }
                          : {}),
                        ...(isLargestScreen
                          ? {
                              height: "150px",
                              width: "150px",
                            }
                          : {}),
                      }}
                    />
                    <Typography
                      variant="h5"
                      align={isLargerScreen ? "left" : "center"}
                      style={{
                        flexGrow: 1,
                        marginLeft: "8px",
                        marginRight: "8px",
                        fontSize: "22px",
                        ...(isLargerScreen
                          ? {
                              fontSize: "18px",
                              marginLeft: 0,
                              marginRight: 0,
                            }
                          : {}),
                        ...(isLargestScreen
                          ? {
                              fontSize: "22px",
                            }
                          : {}),
                      }}
                    >
                      {detailedProduct.title}
                    </Typography>
                    <QuantityInput
                      value={product.quantity}
                      isSmall={isLargerScreen && !isLargestScreen}
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
                    <Typography
                      variant="h5"
                      style={{
                        flexGrow: 0,
                        fontSize:
                          isLargerScreen && !isLargestScreen ? "18px" : "22px",
                        minWidth: isLargestScreen ? "80px" : "70px",
                      }}
                    >
                      {formatPrice(detailedProduct.price * product.quantity)}
                    </Typography>
                    {isLargerScreen && !isLargestScreen ? (
                      <IconButton
                        color="error"
                        onClick={() => removeProductFromCart(cart, product.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    ) : (
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        sx={{ flexShrink: 0 }}
                        onClick={() => removeProductFromCart(cart, product.id)}
                      >
                        Remove
                      </Button>
                    )}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      height: "150px",
                      width: "100%",
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: 2,
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
              </div>
            );
          })}
        </div>
      )}
      {cart.length > 0 && cart.length === cartDetails.length && (
        <div
          style={{
            marginTop: summaryInfoMargins,
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
              style={{ marginTop: summaryInfoMargins }}
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
