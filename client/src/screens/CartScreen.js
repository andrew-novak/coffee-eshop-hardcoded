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
} from "@mui/material";
import { connect } from "react-redux";

import getProducts from "actions/getProducts";
import Screen from "components/Screen";
import image from "productImages/product0-img6.jpeg";

const CartScreen = ({ cart }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Screen>
      <h1>Cart</h1>
      {cart.length < 1 && <h3>No products in cart</h3>}
      {cart.map((product) => (
        <div>
          id: {product.id}, quantity: {product.quantity}
        </div>
      ))}
    </Screen>
  );
};

const mapState = (state) => {
  const { cart } = state;
  return { cart };
};

export default connect(mapState)(CartScreen);
