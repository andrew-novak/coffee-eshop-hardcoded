import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { connect } from "react-redux";

import getProduct from "actions/getProduct";
import addToCart from "actions/addToCart";
import Screen from "components/Screen";
import image from "productImages/product0-img6.jpeg";

const HomeScreen = ({ product, cart, getProduct, addToCart }) => {
  const { productId } = useParams();
  const theme = useTheme();
  const [quantity, setQuantity] = useState("0");

  useEffect(() => {
    getProduct(productId);
  }, [getProduct, productId]);

  return (
    <Screen>
      <Container maxWidth={false} sx={{ maxWidth: 2000 }}>
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
        <Typography>{product.price}</Typography>
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <Button onClick={() => addToCart(cart, productId, parseInt(quantity))}>
          Add to cart
        </Button>
      </Container>
    </Screen>
  );
};

const mapState = (state) => {
  const { cart, product } = state;
  return { cart, product };
};

export default connect(mapState, { getProduct, addToCart })(HomeScreen);
