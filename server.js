const express = require("express");

const mongoose = require("mongoose");
const Note = require("./models/NotesModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.get("/", (req, res) => {
  res.send("hello node API");
});

app.get("/blog", (req, res) => {
  res.send("entered into blog my name is samarjeet");
});
// get all notes
app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get note by note id

app.get("/note/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//creating note

app.post("/note", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a note

app.put("/note/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndUpdate(id, req.body);
    if (!note) {
      return res
        .status(404)
        .json({ message: `cannot find note with id ${id}` });
    }
    const udpatedNote = await Note.findById(id);

    res.status(200).json(udpatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a note

app.delete("/note/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res
        .status(404)
        .json({ message: `cannot find note with id ${id}` });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@mychat.fyp8sow.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connection is made with database");
    app.listen(3000, () => {
      console.log(`node API is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
