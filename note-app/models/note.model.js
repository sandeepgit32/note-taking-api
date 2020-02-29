const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        minlength: 1,
        required: false,
    },
    content: {
        type: String,
        minlength: 1,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);