const mongoose = require("mongoose");

const letterSchema = mongoose.Schema(
  {
    text: String,
    email: String,
    date: String,
  },
  {
    timestamps: true,
  }
);

const Letter = mongoose.model("Letter", letterSchema);

module.exports = Letter;
