const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    major: {
        type: String
    },
    gpa: {
        type: Number
    },
    id: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Student', StudentSchema);