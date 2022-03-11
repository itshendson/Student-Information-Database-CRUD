const express = require('express');
const router = express.Router();

router.post('/student', (req, res) => {
    // if (!req.body) {
    //     res.send({error: "You must provide student information."})
    // }

    // // Instantiate student object
    // const student = new StudentDb({
    //     name: req.body.name,
    //     major: req.body.major,
    //     gpa: req.body.gpa,
    //     id: req.body.id
    // })

    // Save student to database
    res.status(200).send(req.body);
    console.log(req.body);
})

router.put('/', (req, res) => {
    
})

router.delete('/', (req, res) => {
    
})

module.exports = router;