import React from "react";
import heart from "../assets/heart.png";
const Navbar = () => {
  return (
    <div className="flex pl-5 pt-4">
      <img src={heart} className="w-7 h-7 mr-2 " />
      <h1 className="font-space font-semibold text-2xl">SafeShrine</h1>
    </div>
  );
};

export default Navbar;
