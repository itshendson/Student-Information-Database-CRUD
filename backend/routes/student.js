const express = require('express');
const router = express.Router();

const StudentSchema = require('../models/Student.js');

/**
 * POST request for Endpoint /api/v1/student
 */
router.post('/api/v1/student', (req, res) => {
    if (!req.body) {
        res.json('No student information entered.')
    }

    // Instantiate student object
    const studentDocument = new StudentSchema({
        name: req.body.name,
        major: req.body.major,
        gpa: req.body.gpa,
        id: req.body.id
    })

    StudentSchema.findOne({id: studentDocument.id}, async (err, student) => {
        // Create student if it doesn't exist in database already
        if (!student) {
            try {
                await studentDocument.save()
                res.status(201).json('Student successfully created.');
            } catch(err) {
                res.status(500).json(`Could not save student: ${err}`)
            }
        } else {
            res.status(409).json(`Student ID ${student.id} already exists in database.`)
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

router.delete('/api/v1/student', (req, res) => {
    try {
        StudentSchema.deleteOne(
            { id: req.body.id }
        )
            .then(result => {
                if (result.deletedCount === 0) {
                    return res.json('No student record to delete.')
                }
                res.json(`Deleted Student ${req.body.id}.`);
            })
    } catch(err) {
        res.send({error: "Encountered a problem while deleting student."})
    }
})

module.exports = router;