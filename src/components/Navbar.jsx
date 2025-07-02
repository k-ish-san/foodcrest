// Navbar.jsx
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const Navbar = ({ setSelectedCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const categories = ["Spicy", "Tasty", "Delicious", "Crispy"];

  return (
    <nav className="flex items-center justify-around md:px-10 py-4 bg-white sticky top-0 shadow-md z-50">
      <div className="flex items-center space-x-2 font-bold text-xl text-black">
        <span className="text-2xl">🍴</span>
        <span>FoodCrest</span>
      </div>

      <ul className="flex space-x-8 text-gray-800 font-medium relative">
        <li className="hover:text-amber-600 transition cursor-pointer">Home</li>

        <li className="relative group cursor-pointer">
          <div
            onClick={toggleDropdown}
            className="flex items-center space-x-1 hover:text-amber-600 transition"
          >
            <span>Dishes</span>
            <FiChevronDown className="w-4 h-4" />
          </div>

          {isDropdownOpen && (
            <ul className="absolute top-8 left-0 bg-white border rounded shadow w-32 z-10">
              {categories.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setSelectedCategory(item); // 🔥 update selected category
                    setIsDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-amber-100 text-sm text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="hover:text-amber-600 transition cursor-pointer">
          About
        </li>
        <li className="hover:text-amber-600 transition cursor-pointer">Menu</li>
        <li className="hover:text-amber-600 transition cursor-pointer">
          Reviews
        </li>
      </ul>

      <button className="text-amber-600 border-2 border-amber-600 px-5 py-1 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
