// Navbar.jsx
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi"; // Cart icon

const Navbar = ({ setSelectedCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const categories = ["Spicy", "Tasty", "Delicious", "Crispy"];

  return (
    <nav className="flex items-center justify-around px-6 md:px-10 py-4 bg-white sticky top-0 shadow-md z-50">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center space-x-2 font-bold text-xl text-black"
      >
        <span className="text-2xl">🍴</span>
        <span>FoodCrest</span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-gray-800 font-medium relative items-center">
        <li>
          <Link to="/" className="hover:text-amber-600 transition">
            Home
          </Link>
        </li>

        {/* Dishes Dropdown */}
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
                    setSelectedCategory(item);
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

        <li>
          <Link to="/about" className="hover:text-amber-600 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="hover:text-amber-600 transition">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="hover:text-amber-600 transition">
            Reviews
          </Link>
        </li>

        {/* Cart icon */}
        <li>
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-xl hover:text-amber-600 transition w-5 h-5 " />
            <span className="absolute -top-2 -right-3 bg-amber-600 text-white w-3 h-3 flex items-center justify-center p-2 rounded-full">1</span>
          </Link>
        </li>

        <li>
          {/* Login Button */}
          <button className="text-amber-600 border-2 border-amber-600 px-5 py-1 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
