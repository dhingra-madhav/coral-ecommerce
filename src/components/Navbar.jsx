import React, { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import logo from "/logo.svg";
import LoginCard from "./LoginCard";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const navItems = [
    { title: "Accessories", path: "/accessories" },
    { title: "Books & Magazines", path: "/books" },
    { title: "Toys & Entertainment", path: "/toys" },
    { title: "Beauty & Personal Care", path: "/beauty" },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-6 h-6 cursor-pointer hidden md:block" />
        <a href="/" className="">
          <img src={logo} alt="" />
        </a>

        {/* account and shopping btn */}
        <button
          onClick={toggleLogin}
          className="bg-Black hover:bg-orange-500 px-4 py-2 text-white font-semibold flex gap-2 items-center rounded-2xl"
        >
          <FaUser /> Login
        </button>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-black" />
            ) : (
              <FaBars className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>
      <hr />
      {/* nav items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-evenly text-black hidden">
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-orange-500">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu items */}
      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className=" hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to={path} onClick={toggleMenu}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Render the LoginCard component */}
      {isLoginOpen && <LoginCard onClose={toggleLogin} />}
    </header>
  );
};

export default Navbar;
