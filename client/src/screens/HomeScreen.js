import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  ButtonBase,
  Typography,
} from "@mui/material";

import Screen from "components/Screen";
import image from "productImages/product0-img6.jpeg";

const products = [
  { id: 0, title: "T-Shirt", price: "£29.99" },
  { id: 1, title: "Jumper", price: "£42.00" },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <Screen>
      <Container maxWidth={2000}>
        <h1>Home</h1>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item key={index} xs={4}>
              <Card sx={{ borderRadius: 0, boxShadow: 0 }}>
                <ButtonBase
                  sx={{ display: "block", textAlign: "initial", width: "100%" }}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={product.title}
                  />
                  <Typography>{product.title}</Typography>
                  <Typography>{product.price}</Typography>
                </ButtonBase>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Screen>
  );
};
export default HomeScreen;
