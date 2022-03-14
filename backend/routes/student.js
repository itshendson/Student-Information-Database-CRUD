const express = require('express');
const { find } = require('../models/Student.js');
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
        studentDocument.save();
        // res.status(200).send(req.body);
        res.status(200).redirect('/');
    } catch (err) {
        res.send({error: "Encountered a problem while saving to database."})
    }
})

router.get('/student', (req, res) => {
    StudentSchema.find()
        .then(results => {
            console.log(results);
        })
})

router.put('/', (req, res) => {
    
})

router.delete('/', (req, res) => {
    
})

module.exports = router;