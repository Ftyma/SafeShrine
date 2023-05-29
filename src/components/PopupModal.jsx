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
      <div className="bg-primary relative w-3/5 h-3/4 font-space px-8 py-5">
        <button
          id="container"
          onClick={handleClose}
          className="absolute font-semibold top-3 right-4  bg-white rounded-sm px-1"
        >
          X
        </button>
        <h1 className="text-3xl text-center font-semibold">Update Letter</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4 mt-8">
            <label htmlFor="email" className="font-semibold">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="ml-3 px-1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="font-semibold">
              Date:
            </label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date || ""}
              onChange={handleChange}
              className="ml-4 px-1"
            />
          </div>

          <div className="form-group relative mt-4">
            <label htmlFor="text" className="font-semibold">
              Text:
            </label>
            <textarea
              type="text"
              id="text"
              name="text"
              value={formData.text || ""}
              onChange={handleChange}
              className="form-control mt-2 px-2 py-1 border border-solid w-full h-40 md:h-60 !important resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-white font-semibold rounded-sm px-3 absolute right-8 mt-10"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
