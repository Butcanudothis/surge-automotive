import React from "react";
import teslaLogo from "../assets/teslaLogo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-12 p-4 text-sm font-bold ">
      <div>
        <img className="h-3" src={teslaLogo} alt="tesla logo" />
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">RX 7</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Model 3</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Model X</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Model Y</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Solar Roof</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Solar Panels</li>
        </ul>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Shop</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Account</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Menu</li>
        </ul>
      </div>
      <div className="lg:hidden">
        <button className="inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">Menu</button>
      </div>
    </div>
  );
};

export default Navbar;
