import React from "react";
import { useNavigate } from "react-router-dom";
import heart from "../assets/heart.png";
const Navbar = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex pl-5 pt-4">
      <div className="flex " onClick={goHome}>
        <img src={heart} className="w-7 h-7 mr-2 " />
        <h1 className="font-space font-semibold text-2xl">SafeShrine</h1>
      </div>
    </div>
  );
};

export default Navbar;
