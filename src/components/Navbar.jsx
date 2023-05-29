import React, { useEffect, useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import heart from "../assets/heart.png";
import close from "../assets/close.png";
import menu from "../assets/menu.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };

  const navMenu = [
    { title: "Home", link: "/home" },
    { title: "Test", link: "/test" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed inset-0 z-50 flex bg-white w-full h-16 justify-between px-5 py-5 shadow-md opacity-70`}
    >
      <header className="flex" onClick={goHome}>
        <img src={heart} className="w-7 h-7 mr-2 " />
        <h1 className="font-space font-semibold text-2xl">SafeShrine</h1>
      </header>
      <div className="font-space font-semibold sm:flex hidden ">
        <ul>
          {navMenu.map((list, i) => (
            <NavLink
              key={i}
              to={list.link}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary px-3 py-1 mr-5 shadow-sm shadow-primary rounded-md"
                  : "mr-5"
              }
            >
              {list.title}
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="sm:hidden sm:inset-auto fixed block right-6 ">
        <div>
          <img
            src={toggle ? close : menu}
            className="w-[20px] h-[28px] object-contain flex justify-end mr-auto float-right "
            onClick={() => setToggle((prev) => !prev)}
          />
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-slate-400 p-4 rounded-xl text-xl sidebar mt-8`}
        >
          <ul className="flex flex-col ">
            {navMenu.map((list, i) => (
              <NavLink
                key={i}
                to={list.link}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary px-3 py-1 mr-5 shadow-sm shadow-primary rounded-md z-0 my-2"
                    : "mr-5"
                }
              >
                {list.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
