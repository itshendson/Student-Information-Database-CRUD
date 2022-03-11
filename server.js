require('dotenv').config();
const express = require('express');
const connectDatabase = require('./backend/config/database.js');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

/**
 * ---------------- CONFIGURE EXPRESS MIDDLEWARE ----------------
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


/**
 * ---------------- CONNECT TO MONGODB ATLAS ----------------
 */
connectDatabase();


/**
 * ---------------- ROUTES ----------------
 */
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`)
})
// app.use('/api/v1', require('./backend/routes/student.js'));

app.use('/api/v1', (req, res) => {
    res.status(200).send(req.body);
    console.log(req.body);
})



/**
 * ---------------- SERVER ----------------
 */
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})