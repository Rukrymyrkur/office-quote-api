const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const quotes = require('./Quotes');

const app = express();


// homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'the Office Quote app',
    quotes
}));


// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware

// homepage route
// app.get('/', (req, res) => res.render('index'));

// handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// quotes API routes
app.use('/api/quotes', require('./routes/api/quotes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>  console.log(`Example app is listening on port ${PORT}`));