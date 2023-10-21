const Note = require("../models/note");

// fetch note
const fetchNote = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json({ notes });
  } catch (err) {
    res.json({ err })
  }
}

// fetch single note
const fetchSingleNote = async (req, res) => {
  const noteId = req.params.id;
  try {
    const note = await Note.findById(noteId);
    res.json({ note });
  } catch (err) {
    res.json({ err })
  }
}

// create note
const createNote = async (req, res) => {
  const { title, body } = req.body;

  try {
    const note = await Note.create({
      title,
      body
    })
    res.json({ note });
  } catch (err) {
    res.json({ err })
  }
}

// update note
const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { title, body } = req.body;

  // first update data
  try {
    await Note.findByIdAndUpdate(noteId, {
      title,
      body
    })
    // if success then fetch latest data

    try {
      const note = await Note.findById(noteId);
      res.json({ note });
    } catch (err) {
      res.json(err)
    }


  } catch (err) {
    res.json({ err })
  }
}

//  delete note
const deleteNote = async (req, res) => {
  const noteId = req.params.id;
  try {
    await Note.deleteOne({ _id: noteId });
    res.json({ msg: "Deleted succesfully" });
  } catch (err) {
    res.json({ err })
  }
}

module.exports = { fetchNote, fetchSingleNote, createNote, updateNote, deleteNote }