import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateLetter({ visible, onClose }) {
  const [letter, setLetter] = useState([]);

  const [newLetter, setNewLetter] = useState({});
  const [updateLetter, setUpdateLetter] = useState({});
  const [id, setID] = useState(null);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setNewLetter(localStorage.getItem({ Text: "Email" }));
  });

  if (!visible) {
    return null;
  }

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  const updatePost = async (id) => {
    const res = await axios
      .put(`/update-letter/${id}`)
      .then((res) => console.log(res))
      .then(() => {
        alert(`Successfully updated item ${id}`);
      })
      .catch((error) => console.log(error));

    setUpdateLetter(letter);
  };

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setUpdateLetter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-3 rounded font-space w-3/5">
        <h1 className="text-center font-semibold text-lg mb-2">
          Update Letter
        </h1>
        <form>
          <div className="form-group flex flex-row mt-5">
            <label>Email: </label>
            <input
              id="email"
              name="email"
              type="text"
              value={updateLetter.email ? updateLetter.email : ""}
              onChange={handleChange}
              className="form-control border border-solid mx-3"
            ></input>
          </div>
          <div className="form-group flex flex-row my-3">
            <label>Send Email in: </label>
            <input
              id="date"
              name="date"
              type="text"
              className="form-control border border-solid mx-3"
              value={updateLetter.date ? updateLetter.date : ""}
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group flex flex-col">
            <label>Letter: </label>
            <textarea
              id="text"
              name="text"
              type="text"
              className="form-control border border-solid w-full"
              value={updateLetter.letter ? updateLetter.letter : ""}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="border-solid bg-primary rounded-md p-2 float-right my-5"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
