import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "screens/HomeScreen";
import ProductScreen from "screens/ProductScreen";
import NotFoundScreen from "screens/NotFoundScreen";

const App = () => (
  <div style={{ height: "100%", backgroundColor: "pink" }}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/product/:productId" exact element={<ProductScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
