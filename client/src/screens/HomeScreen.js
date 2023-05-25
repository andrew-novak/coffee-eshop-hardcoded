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
import getMediaFileUrl from "helpers/getMediaFileUrl";

const HomeScreen = ({ products, getProducts }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const priceFormatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <Screen>
      <h1>Home</h1>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} xl={3}>
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
                    backgroundImage: `url(${getMediaFileUrl(
                      product.id,
                      product.mediaFilenames[0]
                    )})`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: 0,
                    paddingTop: theme.custom.heightPercentRatios["1:1"],
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontSize: 24, marginBottom: 1 }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    align="right"
                    sx={{ fontSize: 24, fontWeight: 600 }}
                  >
                    {priceFormatter.format(product.price)}
                  </Typography>
                </CardContent>
              </ButtonBase>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Screen>
  );
};

const mapState = (state) => {
  const { products } = state;
  return { products };
};

export default connect(mapState, { getProducts })(HomeScreen);
