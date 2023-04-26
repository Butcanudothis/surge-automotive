import React from "react";
import { FiChevronDown } from "react-icons/fi";
import Navbar from "./Navbar";
import tailwindcssAnimate from "tailwindcss-animate";



const Model = () => {


  return (
    <div className="bg-[url('./assets/Mazda-RX-7-blackandsilver-small.webp')] lg:bg-[url('./assets/Mazda-RX-7-blackandsilver-large.webp')] h-screen bg-cover bg-center">
      <Navbar textColor="text-white" />
      <div>
        <div className="absolute inset-x-0 top-[15%] text-center">
          <h1 className="text-3xl font-bold">RX 7e</h1>
          <p className="p-2 text-sm">
            Order Online for{" "}
            <span className="underline underline-offset-4">
              Touchless Delivery
            </span>
          </p>
        </div>
        <div className="flex place-items-center justify-center text-center gap-[10%] pb-3 text-gray-200
        absolute inset-x-0 bottom-[13%]">
          <ul className="animate-in slide-in-from-bottom-full duration-1000">
            <li className="text-2xl font-bold ">396mi</li>
            <li className="text-sm">Range</li>
          </ul>
          <ul  className="animate-in slide-in-from-bottom-full duration-1000">
            <li className="text-2xl font-bold">1.5s</li>
            <li className="text-sm">0-60 mph</li>
          </ul>
          <ul  className="animate-in slide-in-from-bottom-full duration-1000">
            <li className="text-2xl font-bold">1,050 hp</li>
            <li className="text-sm">Peak Power</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[2%]">
          <button className="bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white hover:animate-pulse">
            Custom Order
          </button>
          <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 hover:animate-pulse">
            Existing Inventory
          </button>
        </div>
        <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[0.5%]">
          <FiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Model;
