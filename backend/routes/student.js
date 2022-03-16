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

    StudentSchema.findOne({id: studentDocument.id}, (err, student) => {
        // Create student if it doesn't exist in database already
        if (!student) {
            try {
                studentDocument.save();
                res.status(200).redirect('/');
            } catch(err) {
                res.send({error: "Encountered a problem while saving to database."})
            }
        } else {
            res.send({error: "Student already exists in database."})
        }
    })
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

/**
 * PUT request for Endpoint /api/v1/student
 */
router.put('/api/v1/student', (req, res) => {
    try {
        StudentSchema.findOneAndUpdate(
            { id: req.body.id },
            { major: req.body.major }
        )
            .then(result => {
                res.json('Success');
            })
    } catch(err) {
        res.send({error: "Encountered a problem while updating student."})
    }
})

router.delete('/', (req, res) => {
    
})

module.exports = router;