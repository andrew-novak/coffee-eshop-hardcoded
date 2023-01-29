import { useParams } from "react-router-dom";
import { Container, Grid, Card, CardMedia, Typography } from "@mui/material";

import Screen from "components/Screen";
import image from "productImages/product0-img6.jpeg";

const products = [
  { title: "T-Shirt", price: "£29.99" },
  { title: "Jumper", price: "£42.00" },
];

const HomeScreen = () => {
  const { productId } = useParams();
  return (
    <Screen>
      <Container maxWidth={2000}>
        <h1>Product ID: {productId}</h1>
      </Container>
    </Screen>
  );
};

export default HomeScreen;
