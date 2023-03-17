import React from "react";
import Navbar from "./Navbar";
import "../styles/page1.css";

const Page1 = () => {
  return (
    <div id="Page1" className="p-5">
      <Navbar />
      <h1 className="font-space font-semibold">
        Write an Email to Your Future Self
      </h1>
      <div className="container">
        <h1 className="title font-space">Dear Future Self: </h1>
        <div className="textContainer">
          <textarea className="myText font-space" type="text" />
        </div>

        <div className="container1">
          <div className="email-container">
            <label>Your Email: </label>
            <input className="email" type="email"></input>
          </div>

          <div className="date-container">
            <label>Send Email in: </label>
            <input></input>
          </div>
        </div>

        <button className="btn">Send to the Future</button>
      </div>
    </div>
  );
};

export default Page1;
