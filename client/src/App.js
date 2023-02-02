import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "store";
import theme from "theme";
import HomeScreen from "screens/HomeScreen";
import ProductScreen from "screens/ProductScreen";
import CartScreen from "screens/CartScreen";
import PaymentSuccessScreen from "screens/PaymentSuccessScreen";
import NotFoundScreen from "screens/NotFoundScreen";

const App = () => (
  <div style={{ height: "100%", backgroundColor: "pink" }}>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
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
