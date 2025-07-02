import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
// import CartPage from "./pages/CartPage.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <BrowserRouter>
      <Navbar setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route
          path="/"
          element={<Home selectedCategory={selectedCategory} />}
        />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
