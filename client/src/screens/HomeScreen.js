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

import Screen from "components/Screen";
import image from "productImages/product0-img6.jpeg";

const products = [
  { id: 0, title: "T-Shirt", price: "£29.99" },
  { id: 1, title: "Jumper", price: "£42.00" },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  const theme = useTheme();
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
                      paddingTop: theme.heightPercentRatios["1:1"],
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
export default HomeScreen;
