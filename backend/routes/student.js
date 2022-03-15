const express = require('express');
const { find } = require('../models/Student.js');
const router = express.Router();

const StudentSchema = require('../models/Student.js');

/**
 * POST request for Endpoint /api/v1/student
 */
router.post('/api/v1/student', (req, res) => {
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
        res.status(200).redirect('/');
    } catch(err) {
        res.send({error: "Encountered a problem while saving to database."})
    }
})

/**
 * GET request for Endpoint /api/v1/student
 */
router.get('/', (req, res) => {
    try {
    StudentSchema.find()
        .then(data => {
            res.render('index.ejs', { students: data });
        })
    } catch(err) {
        res.send({error: "Encountered a problem while retrieving data."})
    }
})

router.put('/', (req, res) => {
    
})

router.delete('/', (req, res) => {
    
})

module.exports = router;