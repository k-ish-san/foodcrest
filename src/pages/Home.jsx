// Home.jsx
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Dishes from "../components/Dishes";
import Reviews from "../components/Reviews";


const Home = ({selectedCategory}) => {
  

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
