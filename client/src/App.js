import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "screens/HomeScreen";
import NotFoundScreen from "screens/NotFoundScreen";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<HomeScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  </BrowserRouter>
);

export default App;
