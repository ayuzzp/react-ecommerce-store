import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"
import Cart from "./components/cart";
import Cards from "./components/cards";
import Slider from "./components/slider";
import Smartphone from "./pages/SmartPhone";
import Watch from "./pages/Watch";
import Laptops from "./pages/Laptops";
import Accessories from "./pages/Accessories";
import Cameras from "./pages/Cameras";
import Success from "./pages/success"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Cards />} />
        </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="slider" element={<Slider />} />
          <Route path="smartphone" element={<Smartphone />} />
          <Route path="watch" element={<Watch />} />
          <Route path="laptop" element={<Laptops />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="camera" element={<Cameras />} />
          <Route path="success" element={<Success />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
