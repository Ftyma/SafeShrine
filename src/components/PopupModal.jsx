import React, { useEffect, useState } from "react";

const PopupModal = ({ selectedItem, onUpdate, onClose, visible }) => {
  const [formData, setFormData] = useState(selectedItem);

  //update the local state when the selectedItem prop changes
  useEffect(() => {
    // Initialize with an empty object if selectedData is undefined
    setFormData(selectedItem || {});
  }, [selectedItem]);

  if (!visible) {
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  const handleClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date || ""}
            onChange={handleChange}
          />
        </div>

        <div className="form-group flex flex-col w-full h-full">
          <label htmlFor="text">Text:</label>
          <textarea
            type="text"
            id="text"
            name="text"
            value={formData.text || ""}
            onChange={handleChange}
            className="form-control flex border border-solid w-full h-full"
          />
        </div>

        <button type="submit" className="border border-solid mr-3">
          Update
        </button>
      </form>
      <button
        id="container"
        className="border border-solid"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default PopupModal;
