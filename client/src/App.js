import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "store";
import theme from "theme";
import { BASE_URL } from "constants/urls";
import HomeScreen from "screens/HomeScreen";
import ProductScreen from "screens/ProductScreen";
import CartScreen from "screens/CartScreen";
import PaymentSuccessScreen from "screens/PaymentSuccessScreen";
import NotFoundScreen from "screens/NotFoundScreen";

const App = () => (
  /* Background */
  <div
    style={{
      height: "100%",
      background:
        "repeating-linear-gradient(45deg, #fab4b4 0, #fab4b4 10%, transparent 0, transparent 50%)",
      backgroundSize: "2em 2em",
      backgroundColor: "#fab9b9",
    }}
  >
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={BASE_URL}>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route
              path="/product/:productId"
              exact
              element={<ProductScreen />}
            />
            <Route path="/cart" exact element={<CartScreen />} />
            <Route
              path="/payment-success"
              exact
              element={<PaymentSuccessScreen />}
            />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  </div>
);

export default App;
