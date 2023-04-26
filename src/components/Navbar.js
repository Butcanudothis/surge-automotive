import React from "react";
import teslaLogo from "../assets/teslaLogo.svg";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const Navbar = ({ textColor = "text-black" }) => {
  const [sideMenu, setSideMenu] = useState(false);
  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <div
      className={
        "flex justify-between items-center px-12 p-4 text-sm font-bold " +
        textColor
      }
    >
      <div>
        <a href="/">
          <img className="h-3" src={teslaLogo} alt="tesla logo" />
        </a>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <a href="/RX7e">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">RX 7e</li>
          </a>

          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Projects</li>
          <a href="/development-timeline">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              Development
            </li>
          </a>
          <a href="/contact-form">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Contact</li>
          </a>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Services</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">About</li>
        </ul>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Shop</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Account</li>
          <li
            onClick={handleSideMenu}
            className="py-1 px-3 hover:rounded hover:bg-black/5"
          >
            Menu
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={handleSideMenu}
          className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>
      <div
        className={
          sideMenu
            ? "bg-white absolute top-0 right-0 h-full w-80 z-10"
            : "fixed right-[100%]"
        }
      >
        <div className="flex justify-end pr-8 pt-8">
          <TfiClose
            onClick={handleSideMenu}
            size={28}
            className="rounded-full hover:bg-black/5 p-2 text-black"
          />
        </div>
        <ul className="pt-8 px-6">
          <a href="/RX7e">
          <li className="py-3 px-3 hover:rounded hover:bg-black/5 text-black">
            RX 7e
          </li>
          </a>
          <li className="py-3 px-3 hover:rounded hover:bg-black/5 text-black">
            Projects
          </li>
          <li className="py-3 px-3 hover:rounded hover:bg-black/5 text-black">
            Development
          </li>
          <li className="py-3 px-3 hover:rounded hover:bg-black/5 text-black">
            Contact
          </li>
          <li className="py-3 px-3 hover:rounded hover:bg-black/5 text-black">
            Services
          </li>

          <li className="py-3 px-3 hover:rounded hover:bg-black/5 text-black">
            About
          </li>
          <li className="py-3 px-3 hover:rounded hover:bg-black/5 text-black">
            Shop
          </li>
          <li className="py-3 px-3 hover:rounded hover:bg-black/5 text-black">
            Account
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
