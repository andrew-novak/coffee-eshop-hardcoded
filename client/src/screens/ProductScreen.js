import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { connect } from "react-redux";

import getProduct from "actions/getProduct";
import setCartProductQuantity from "actions/setCartProductQuantity";
import removeProductFromCart from "actions/removeProductFromCart";
import Screen from "components/Screen";
import image from "productImages/product0-img6.jpeg";

const HomeScreen = ({
  product,
  cart,
  getProduct,
  setCartProductQuantity,
  removeProductFromCart,
}) => {
  const params = useParams();
  const productId = parseInt(params.productId);
  const theme = useTheme();
  const foundProduct = cart.find((product) => product.id === productId);
  console.log("foundProduct:", foundProduct);
  const isAlreadyInCart = foundProduct !== undefined;
  const [quantity, setQuantity] = useState(
    foundProduct ? foundProduct.quantity : "0"
  );

  useEffect(() => {
    getProduct(productId);
  }, [getProduct, productId]);

  const priceFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <Screen>
      <h1>Product ID: {productId}</h1>
      <div
        title={product.title}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          width: 400,
          height: 0,
          paddingTop: theme.custom.heightPercentRatios["1:1"],
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      />
      <Typography>{product.title}</Typography>
      <Typography>{priceFormatter.format(product.price)}</Typography>
      <Typography>{product.description}</Typography>
      {!isAlreadyInCart && (
        <Button
          onClick={() => {
            setQuantity(1);
            setCartProductQuantity(cart, productId, 1);
          }}
        >
          Add to cart
        </Button>
      )}
      {isAlreadyInCart && (
        <>
          <TextField
            label="Quantity"
            type="number"
            InputProps={{
              inputProps: { min: 0 },
            }}
            value={quantity}
            onChange={(event) => {
              const input = event.target.value;

              // update displayed number
              setQuantity(input);

              if (isAlreadyInCart && parseInt(input) > 0) {
                // update cart as well
                setCartProductQuantity(cart, productId, parseInt(input));
              }

              if (isAlreadyInCart && parseInt(input) <= 0) {
                // remove product from cart
                removeProductFromCart(cart, productId);
              }
            }}
          />
          <Button onClick={() => removeProductFromCart(cart, productId)}>
            Remove from cart
          </Button>
        </>
      )}
    </Screen>
  );
};

const mapState = (state) => {
  const { cart, product } = state;
  return { cart, product };
};

export default connect(mapState, {
  getProduct,
  setCartProductQuantity,
  removeProductFromCart,
})(HomeScreen);
