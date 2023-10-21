// noteRoute.js
const express = require('express');
const noteRouter = express.Router();

const { fetchNote, fetchSingleNote, createNote, updateNote, deleteNote } = require('../controller/notesController');



// fetch notes
noteRouter.get('/notes', fetchNote);

// fetch single note
noteRouter.get('/notes/:id', fetchSingleNote);

// create note
noteRouter.post('/notes', createNote);

// update note
noteRouter.put('/notes/:id', updateNote);

// delete single note
noteRouter.delete('/notes/:id', deleteNote);

module.exports = noteRouter;
