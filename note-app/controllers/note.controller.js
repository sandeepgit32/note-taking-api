const Note = require('../models/note.model');
const apiResponse = require("../helpers/apiResponse");

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return apiResponse.validationError400(res, "Note content can not be empty");
    }

    // Create a Note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // Save Note in the database
    note.save()
        .then(data => apiResponse.createdResponse201(res, data))
        .catch(err => apiResponse.ErrorResponse500(res, err))
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
        .then(notes => apiResponse.successResponse200(res, notes))
        .catch(err => apiResponse.ErrorResponse500(res, err))
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return apiResponse.notFoundResponse404(res, `Note not found with id ${req.params.noteId}`);
            }
             return apiResponse.successResponse200(res, note);
        })
        .catch(err => apiResponse.ErrorResponse500(res, err))
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.content) {
        return apiResponse.validationError400(res, "Note content can not be empty");
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
            title: req.body.title || "Untitled Note",
            content: req.body.content
        }, {
            new: true
        })
        .then(note => {
            if (!note) {
                return apiResponse.notFoundResponse404(res, `Note not found with id ${req.params.noteId}`);
            }
            return apiResponse.successResponse200(res, `Note with id ${req.params.noteId} updated`);
        })
        .catch(err => apiResponse.ErrorResponse500(res, err));
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
        .then(note => {
            if (!note) {
                return apiResponse.notFoundResponse404(res, `Note not found with id ${req.params.noteId}`);
            }
            return apiResponse.successResponse200(res, `Note with id ${req.params.noteId} deleted`);
        })
        .catch(err => apiResponse.ErrorResponse500(res, err));
};