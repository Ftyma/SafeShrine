import React, { useEffect, useState } from "react";
import "../styles/landing.css";
import Typist from "react-typist";

import { motion } from "framer-motion";
import Home from "./Home";
import { useNavigate, Navigate } from "react-router-dom";

const Landing = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("work");
      navigate("/home", { replace: true });
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="landing">
      <Typist avgTypingDelay={120} cursor={{ show: false }}>
        <h1 className="title font-space font-semibold text-8xl">Welcome</h1>
        <Typist.Delay ms={300} />
        <br />

        <span className="sub-title font-space text-4xl text-center">
          {" "}
          To Safe Space{" "}
        </span>
      </Typist>

      {/* <div className="progressbar-container">
        <div className="progressbar">
          <motion.div
            className="bar"
            animate={{
              width: `${value}%`,
            }}
            transition={{
              duration: 3,
            }}
          ></motion.div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
