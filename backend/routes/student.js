const express = require('express');
const router = express.Router();

const StudentSchema = require('../models/Student.js');

router.post('/student', (req, res) => {
    if (!req.body) {
        res.send({error: "You must provide student information."})
    }

    // Instantiate student object
    const studentDocument = new StudentSchema({
        name: req.body.name,
        major: req.body.major,
        gpa: req.body.gpa,
        id: req.body.id
    })

    // Save student to database
    try {
        const responseStudent = studentDocument.save();
        res.status(200).send(req.body);
    } catch (err) {
        res.send({error: "Encountered a problem while saving to database."})
    }
})

router.put('/', (req, res) => {
    
})

router.delete('/', (req, res) => {
    
})

module.exports = router;