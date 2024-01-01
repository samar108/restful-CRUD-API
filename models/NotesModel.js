const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Note's Title"],
      maxlength: 100,
    },
    content: {
      type: String,
      require: [true, "write note"],
      maxlength: 1000,
    },

    image: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
