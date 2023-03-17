import React, { useEffect } from "react";
import "../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Navbar from "./Navbar";
import Page3 from "./page3";

const Home = () => {
  let navigate = useNavigate();

  const goPage1 = () => {
    navigate("/page1");
  };

  return (
    <div id="home">
      <Navbar />
      <div className="container">
        <div className="box1">
          <div className="p-8">
            <h1 className="font-space font-semibold text-2xl text-center">
              Write To Your Future-Self
            </h1>
            <p className="pt-5">What do you want to tell your future self?</p>
            <button className="btn-p1 font-space mt-5" onClick={goPage1}>
              Click Me
            </button>
          </div>
        </div>

        <div className="box2">
          <div className="p-8">
            <h1 className="font-space font-semibold text-2xl text-center">
              Write From You
            </h1>
            <p className="pt-5 font-space">
              What do you want to tell your future self?
            </p>
          </div>
        </div>

        <div className="box3">
          <div className="p-8">
            <h1 className="font-space font-semibold text-2xl text-center">
              Post a Message
            </h1>
            <p className="pt-5 font-space">
              What do you want to tell your future self?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
