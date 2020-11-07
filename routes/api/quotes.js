const express = require('express');
const router = express.Router();
const quotes = require('../../Quotes');

// gets all members
router.get('/', (req, res) => res.json(quotes));

// get single member
router.get('/:id', (req, res) => {
    const found = quotes.some(quote => quote.id === parseInt(req.params.id));

    if(found){
    res.json(quotes.filter(quote => quote.id === parseInt(req.params.id)));
} else {
    res.status(400).json({ msg: `No quote with the id of ${req.params.id} found` });
}
});

module.exports = router;