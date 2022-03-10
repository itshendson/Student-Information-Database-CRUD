const express = require('express');
const PORT = 3000;

const app = express();

app.post('/', (req, res) => {

})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.update('/', (req, res) => {
    
})

app.delete('/', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
})