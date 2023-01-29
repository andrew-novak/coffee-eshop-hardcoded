import { Container, Grid, Card, CardMedia } from "@mui/material";

import Screen from "components/Screen";
const products = ["T-Shirt", "Jumper"];

const HomeScreen = () => (
  <Screen>
    <h1>Home</h1>
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item key={index} xs={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/static/images/cards/anImage.jpg"
                alt={product}
              />
              {product}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Screen>
);

export default HomeScreen;
