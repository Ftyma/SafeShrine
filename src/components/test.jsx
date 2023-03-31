import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navbar";
import "../styles/text.css";
import { useNavigate } from "react-router-dom";
import UpdateLetter from "./UpdateLetter";

const Test = () => {
  // const [backendData, setBackendData] = useState([{}]);
  // const fetchItem = async () => {
  //   const data = await fetch("/letter");
  //   const backendData = await data.json();
  //   setBackendData(backendData);
  // };
  // useEffect(() => {
  //   fetchItem();
  // }, []);
  const navigate = useNavigate();
  const [letter, setLetter] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleOnClose = () => setShowUpdateModal(false);
  const [updatedLetter, setUpdateLetter] = useState({});

  useEffect(() => {
    axios
      .get("/get-letter")
      .then((res) => {
        console.log(res);
        setLetter(res.data);
      })
      .catch((err) => console.log(err));
  });

  const deleteLetter = async (id) => {
    //console.log(id);
    if (window.confirm("Are you sure you want to delete the user record?")) {
      const res = await axios
        .delete(`/delete-letter/${id}`)
        .then((res) => console.log(res))
        .then(() => {
          alert(`Successfully deleted item ${id}`);
        })
        .catch((error) => console.log(error));
    }

    //  window.location.reload();
  };

  const updateLetter = (letter) => {
    console.log(letter);

    const obj = {
      // id: id,
      // text: text,
    };

    let oldLetter = JSON.parse(localStorage.getItem("letter"));
    localStorage.setItem("letter", JSON.stringify([...oldLetter, ...obj]));
  };

  // const updateLetter = async (id) => {
  //   const res = await axios
  //     .put(`/update-letter/${id}`)
  //     .then((res) => console.log(res))
  //     .then(() => {
  //       <UpdateLetter />;
  //     })
  //     .catch((error) => console.log(error));

  //   setUpdateLetter(letter);
  // };

  return (
    <div id="test">
      <Nav />
      <h1 className="text-center font-space font-semibold text-2xl mt-12 mb-5">
        User Submission
      </h1>

      {letter ? (
        <>
          <div className="submission-container">
            <table>
              <tr className="font-space font-semibold">
                <th>Email</th>
                <th>Date</th>
                <th>Letter</th>
                <th>Action</th>
              </tr>

              {letter.map((list) => (
                <>
                  <tr key={list._id} className="font-space">
                    <td>{list.email}</td>
                    <td>{list.date}</td>
                    <td>{list.text}</td>
                    <td>
                      <button
                        onClick={() => deleteLetter(list._id)}
                        className="btn-delete"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => updateLetter(list)}
                        className="btn-edit"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </table>
          </div>
        </>
      ) : (
        ""
      )}
      <button onClick={() => navigate(-1)} className="btn-back">
        GO BACK
      </button>
      <UpdateLetter onClose={handleOnClose} visible={showUpdateModal} />
    </div>
  );
};

export default Test;
