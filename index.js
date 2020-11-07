const express = require('express');
const path = require('path');
const quotes = require('./Quotes');

const app = express();

// homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'the Office Quote app',
    quotes
}));

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

// app.get('/quotes', (req, res) => {
//     res.send(importQuotes);
// })



// members API routes
app.use('/api/quotes', require('./routes/api/quotes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>  console.log(`Example app is listening on port ${PORT}`));