const express = require('express');
const PORT = 3000;

const app = express();

app.post('/', (req, res) => {

})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`)
})

app.put('/', (req, res) => {
    
})

app.delete('/', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})