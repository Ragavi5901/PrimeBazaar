import type { FC } from "react";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/outline";
import { productCategories } from "../data/categories"; // should include image URLs

const Header: FC = () => {
  return (
    <header className="w-full shadow-md bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      {/* 🔹 Top - Logo + Search + Icons */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-3 gap-3 md:gap-0">
        
        {/* Left - Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Prime Bazaar Logo"
            className="h-12 w-12 object-cover rounded-full border-2 border-white shadow-md"
          />
        </Link>

        {/* Center - Search Bar */}
        <div className="w-full md:w-1/2 lg:w-2/3">
          <div className="flex items-center bg-white rounded-md overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2">
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base font-medium">
          <Link to="/login" className="hover:text-yellow-300">Login</Link>
          <Link to="/cart" className="flex items-center gap-1 hover:text-yellow-300">
            <ShoppingCartIcon className="h-6 w-6" /> 
            <span className="hidden sm:inline">Cart</span>
          </Link>
          <Link to="/wishlist" className="hover:text-yellow-300">
            <HeartIcon className="h-6 w-6" />
          </Link>
          <Link to="/profile" className="hover:text-yellow-300">
            <UserIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* 🔹 Bottom - Icon Menu */}
      <div className="w-full bg-white border-t border-gray-200">
        <div className="container mx-auto flex justify-between gap-6 px-4 md:px-6 py-3 overflow-x-auto">
          {Object.entries(productCategories).map(([category, data]) => (
            <Link
              to={`/category/${category}`}
              key={category}
              className="flex flex-col items-center text-gray-700 hover:text-purple-600 min-w-[70px]"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-purple-100 overflow-hidden shadow-sm">
                <img
                  src={data.icon}
                  alt={category}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs md:text-sm font-medium mt-1 text-center">
                {category.replace(/([A-Z])/g, " $1")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
