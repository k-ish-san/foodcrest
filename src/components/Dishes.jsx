import DishCard from "./DishCard.jsx";
import dishes from "../components/data/dishes";

const Dishes = ({ selectedCategory }) => {
  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : dishes;

  return (
    <section className="py-12 px-6 max-w-[1400px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        {selectedCategory ? `${selectedCategory} Dishes` : "Our Dishes"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {filteredDishes.map((dish, index) => (
          <DishCard key={index} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
