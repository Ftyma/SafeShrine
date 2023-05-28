import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navbar";
import "../styles/text.css";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  //const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get("/get-letter")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => console.log("error fetching data", err));
  }, []);

  const deleteLetter = (id) => {
    if (window.confirm("Are you sure you want to delete the user record?")) {
      const res = axios
        .delete(`/delete-letter/${id}`)
        .then(() => {
          console.log(res);
          alert(`Successfully deleted item ${id}`);
        })
        .catch((error) => console.log("error deleting item", error));
    }
    window.location.reload();
  };

  return (
    <div id="test">
      <Nav />
      <h1 className="text-center font-space font-semibold text-2xl mt-12 mb-5">
        User Submission
      </h1>

      {items ? (
        <>
          <div className="submission-container">
            <table>
              <thead>
                <tr className="font-space font-semibold">
                  <th>Email</th>
                  <th>Date</th>
                  <th>Letter</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, key) => (
                  <>
                    <tr
                      key={key}
                      //onClick={() => handleItemClick(item)}
                      className="font-space"
                    >
                      <td>{item.email}</td>
                      <td>{item.date}</td>
                      <td>{item.text}</td>
                      <td>
                        <button
                          onClick={() => deleteLetter(item._id)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                        {/* <button
                          className="btn-edit"
                          onClick={() => handleItemClick(item)}
                        >
                          Edit
                        </button> */}

                        {/* {selectedItem && (
                          <PopupModal
                            selectedItem={items.find(
                              (item) => item.id === selectedItem
                            )}
                            onUpdate={handleUpdate}
                            onClose={handleModalClose}
                          ></PopupModal>
                        )} */}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        ""
      )}
      <button onClick={() => navigate(-1)} className="btn-back">
        GO BACK
      </button>
      {/* visible={showUpdateModal}
      <UpdateLetter
        visible={showUpdateModal}
        onClose={handleOnClose}
      ></UpdateLetter> */}
    </div>
  );
};

export default Test;
