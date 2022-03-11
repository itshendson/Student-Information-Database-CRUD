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

const StudentDb = mongoose.model('Student', StudentSchema); 

module.exports = StudentDb;