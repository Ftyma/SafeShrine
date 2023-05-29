import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navbar";
import "../styles/text.css";
import { useNavigate } from "react-router-dom";
import PopupModal from "./PopupModal";

const Test = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  //fetch item
  useEffect(() => {
    axios
      .get("/get-letter")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((err) => console.log("error fetching data", err));
  }, []);

  //delete item
  const deleteLetter = async (id) => {
    if (window.confirm("Are you sure you want to delete the user record?")) {
      await axios
        .delete(`/delete-letter/${id}`)
        .then(() => {
          console.log("Deleted item: ", id);
          alert(`Successfully deleted item ${id}`);
          window.location.reload();
        })
        .catch((error) => console.log("error deleting item", error));
    }
  };

  //event handling when click on item
  const handleItemClick = (item) => {
    setShowPopup(true);
    setSelectedItem(item);
    console.log("Selected Item:", item);
  };

  //close popup
  const handleModalClose = () => {
    setShowPopup(false);
  };

  //handle update
  const handleUpdate = async (formData) => {
    await axios
      .put(`update-letter/${selectedItem._id}`, formData)
      .then((res) => {
        //handle successful updat
        console.log("Item update:", res.data);
        setShowPopup(false);
        setSelectedItem({ ...selectedItem, ...formData });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error update item:", error);
      });
  };

  return (
    <div id="test">
      <Nav />
      <h1 className="text-center font-space font-semibold text-2xl mt-28 mb-5">
        User Submission
      </h1>

      {items ? (
        <>
          <div className="relative w-100 h-1/2 justify-items-center">
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
                {items.map((item) => (
                  <>
                    <tr
                      key={item.id}
                      //onClick={() => handleItemClick(item)}
                      className="font-space"
                    >
                      <td>{item.email}</td>
                      <td>{item.date}</td>
                      <td>{item.text}</td>
                      <td>
                        <div className="flex flex-col justify-center">
                          <button
                            onClick={() => deleteLetter(item._id)}
                            className="mr-2 border border-black mb-4 bg-deleteBtn rounded-md w-20"
                          >
                            Delete
                          </button>
                          <button
                            className="border border-black mb-4 bg-editBtn rounded-md w-20"
                            onClick={() => handleItemClick(item)}
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <div className="mt-5">
              <button
                onClick={() => navigate(-1)}
                className="absolute w-20 bottom-0 right-16 border border-black mb-16 bg-backBtn rounded-md"
              >
                Return
              </button>
            </div>
          </div>

          {selectedItem && (
            <PopupModal
              selectedItem={selectedItem}
              onUpdate={handleUpdate}
              onClose={handleModalClose}
              visible={showPopup}
            ></PopupModal>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Test;
