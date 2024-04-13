import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = ({item, itemIndex}) => {

  const {cart} = useSelector((state) => state);

  return (
    <div className="">
      {/* for image - logo */}
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" alt="Logo" className="h-14" />
          </div>
        </NavLink>

        {/* for home and cartlogo */}
        <div className="flex items-center gap-x-6 text-slate-100 font-medium mr-5">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {
                cart.length > 0 &&
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
              <div></div>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
