import React, { useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Page1 from "./Page1";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="container">
        <div className="box1">
          <Page1 />
        </div>

        <div className="box2">
          <h1>box2</h1>
        </div>

        <div className="box3">
          <h1>box3</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
