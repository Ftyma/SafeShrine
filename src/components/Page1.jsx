import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/page1.css";
import axios from "axios";

const Page1 = () => {
  const options = [
    { label: "1 month", value: "30" },
    { label: "1 year", value: "365" },
    { label: "2 year", value: "730" },
    { label: "5 year", value: "1825" },
  ];

  const [value, setValue] = useState("30");

  const [post, setPost] = useState({
    text: "",
    email: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    axios
      .post("/post-letter", post)
      .catch((error) => {
        window.alert(error);
        return;
      })
      .then((res) => console.log(res))
      .then(() => {
        alert("Your letter had been sent to the future!");
      });
  };

  return (
    <div id="Page1" className="shadow">
      <Navbar />
      <h1 className="header1 font-space font-semibold mt-12">
        Write an Email to Your Future Self
      </h1>

      <div className="container1">
        <h1 className="title1 font-space">Dear Future Self: </h1>
        <form action="/post-letter" method="POST">
          <div className="form-group textContainer">
            <textarea
              id="text"
              name="text"
              value={post.text}
              onChange={handleChange}
              type="text"
              className="form-control w-4/5 myText rounded-md font-space"
            />
          </div>

          <div className="form-group container2">
            <div className="email-container">
              <label>Your Email: </label>
              <input
                id="email"
                name="email"
                type="text"
                value={post.email}
                onChange={handleChange}
                className="form-control email"
              ></input>
            </div>

            <div className="form-group date-container">
              <label>Send Email in: </label>
              <select
                name="date"
                className="form-control send-select"
                value={post.date.value}
                onChange={handleChange}
              >
                {options.map((option, id) => (
                  <option key={id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="btn-send shadow-md hover:shadow-lg"
            onClick={handleClick}
          >
            Send to the Future
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page1;
