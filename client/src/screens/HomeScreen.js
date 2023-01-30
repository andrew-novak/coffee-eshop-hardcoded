import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  ButtonBase,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";

import getProducts from "actions/getProducts";
import Screen from "components/Screen";
import image from "productImages/product0-img6.jpeg";

const HomeScreen = ({ products, getProducts }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Screen>
      <Container maxWidth={false} sx={{ maxWidth: 2000 }}>
        <h1>Home</h1>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item key={index} xs={4}>
              <Card sx={{ borderRadius: 0, boxShadow: 0 }}>
                <ButtonBase
                  sx={{ display: "block", textAlign: "initial", width: "100%" }}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {/*
                  sx={{
                    height: 0,
                    paddingTop: theme.custom.heightPercentRatios["1:1"],
                  }}
                */}
                  <div
                    title={product.title}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      height: 0,
                      paddingTop: theme.custom.heightPercentRatios["1:1"],
                      width: "100%",
                    }}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontSize: 30 }}>
                      {product.title}
                    </Typography>
                    <Typography sx={{ fontSize: 30 }}>
                      {product.price}
                    </Typography>
                  </CardContent>
                </ButtonBase>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Screen>
  );
};

const mapState = (state) => {
  const { products } = state;
  return { products };
};

export default connect(mapState, { getProducts })(HomeScreen);
