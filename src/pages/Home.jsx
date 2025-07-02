// Home.jsx
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Dishes from "../components/Dishes";
import Reviews from "../components/Reviews";
import { useState } from "react";

const Home = () => {
  const [selectedCategory] = useState(""); // "" means show all by default

  return (
    <>
      <HeroSection />
      <Dishes selectedCategory={selectedCategory} />
      <About />
      <Reviews />
    </>
  );
};

export default Home;
