import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Container, Grid, Card, CardMedia, Typography } from "@mui/material";
import { connect } from "react-redux";

import getProduct from "actions/getProduct";
import Screen from "components/Screen";
import image from "productImages/product0-img6.jpeg";

const HomeScreen = ({ product, getProduct }) => {
  const { productId } = useParams();
  const theme = useTheme();

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
      </Container>
    </Screen>
  );
};

const mapState = (state) => {
  const { product } = state;
  return { product };
};

export default connect(mapState, { getProduct })(HomeScreen);
