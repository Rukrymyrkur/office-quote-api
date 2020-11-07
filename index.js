const express = require('express');
const app = express();
const importData = require('./quotes.json');

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/quotes', (req, res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`)
});