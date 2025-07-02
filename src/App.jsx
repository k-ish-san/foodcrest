// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar setSelectedCategory={setSelectedCategory} />
        <Routes>
          <Route path="/" element={<Home selectedCategory={selectedCategory} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
