import { FaStar } from "react-icons/fa";

const DishCard = ({ dish, onAddToCart }) => {
  const { title, image, price, rating } = dish;

  return (
    <div className="bg-white w-[400px] shadow-md rounded-lg p-4 text-center hover:scale-105 transition">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover object-center rounded-md mb-3"
      />

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <div className="flex justify-center items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-orange-400 ${
              i < rating ? "opacity-100" : "opacity-20"
            }`}
          />
        ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
      <p className="text-black font-bold">${price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(dish)}
        className="border border-orange-500 text-orange-500 font-medium px-4 py-1 rounded-full hover:bg-orange-500 hover:text-white transition"
      >
        Buy Now
          </button>
          </div>
    </div>
  );
};

export default DishCard;
