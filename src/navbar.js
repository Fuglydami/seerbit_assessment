import React from "react";
import Logo from "./assets/logo.png";
import Search_icon from "./assets/search_icon.svg";
import cart_notification from "./assets/cart notification.svg";

const Navbar = () => {
  return (
    <nav
      id="header"
      className="w-full  z-30 top-10 bg-white text-bolder font-black"
    >
      <div className="w-full flex items-center justify-between mt-0 md:px-16 px-4 ">
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <svg
            class="fill-current secondary"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>

        <div className="hidden md:flex" id="menu">
          <h2 className="dark">
            Follow - <span className="cursor-pointer">Fb.</span> /{" "}
            <span className="cursor-pointer">Tw.</span> /{" "}
            <span className="cursor-pointer">In.</span>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <img className="md:w-72 w-40" src={Logo} alt="company_logo" />
        </div>
        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className=" flex items-center w-full md:w-full md:space-x-3">
            <p className="dark">$239:00</p>
            <img
              className="md:flex hidden"
              src={Search_icon}
              alt="search_icon"
            />
            <img
              className="md:flex hidden"
              src={cart_notification}
              alt="cart_notification"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
