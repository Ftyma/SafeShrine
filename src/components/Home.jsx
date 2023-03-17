import React, { useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Navbar from "./Navbar";
import Page3 from "./page3";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="container">
        <div className="box1">
          <Page1 />
        </div>

        <div className="box2">
          <Page2 />
        </div>

        <div className="box3">
          <Page3 />
        </div>
      </div>
    </div>
  );
};

export default Home;
