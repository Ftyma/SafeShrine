import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/page1.css";

const Page1 = () => {
  const options = [
    { label: "1 month", value: "30" },
    { label: "1 year", value: "365" },
    { label: "2 year", value: "730" },
    { label: "5 year", value: "1825" },
  ];

  const [value, setValue] = useState("30");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div id="Page1" className="p-5">
      <Navbar />
      <h1 className="header1 font-space font-semibold">
        Write an Email to Your Future Self
      </h1>
      <div className="container1">
        <h1 className="title1 font-space">Dear Future Self: </h1>
        <div className="textContainer">
          <textarea className="myText font-space" type="text" />
        </div>

        <div className="container2">
          <div className="email-container">
            <label>Your Email: </label>
            <input className="email" type="email"></input>
          </div>

          <div className="date-container">
            <label>Send Email in: </label>
            <select
              className="send-select"
              value={value}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="btn-send">Send to the Future</button>
      </div>
    </div>
  );
};

export default Page1;
