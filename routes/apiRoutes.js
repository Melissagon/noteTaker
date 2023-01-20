const path = require('express').Router();
const storage = require('../db/storage');

path.get('/notes', (req, res) => {
    storage
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

path.post('/notes', (req, res) => {
    storage       
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

path.delete('/notes/:id', (req, res) => {
    storage
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});

module.exports = path;