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
app.set('view engine', 'ejs');
app.use(express.static('public'));


/**
 * ---------------- CONNECT TO MONGODB ATLAS ----------------
 */
connectDatabase();


/**
 * ---------------- ROUTES ----------------
 */
app.use('/', require('./backend/routes/student.js'))



/**
 * ---------------- SERVER ----------------
 */
app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})