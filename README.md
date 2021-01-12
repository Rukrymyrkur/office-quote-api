# The Office Quote API

An API built with Express JS.

## Table of contents

[Info](#info)
[Technologies](#technologies)
[Resources](#resources)
[How to use](#how-to-use)
[Live](#live)

## Info

A simple project made for practising API building.

### Notable features:

- Express router
- Handlebars middleware

One thing I've found helpful and pretty happy to have found out, when having your API deployed to Heroku, if you don't write these lines, you won't be able to use the API anywhere.
Check it out:

```
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET');
    return res.status(200).json({});
}
next();
});
```

## Technologies

- node 12.18.3
- express 4.17.1
- express-handlebars 5.2.0

## Resources

- [Managing cross-origin requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Express JS Crash Course](https://youtu.be/L72fhGm1tfE)

## How to use

An example of usage can be found on my other [Github repo](https://github.com/Rukrymyrkur/office-quote-generator). For example, to get a random quote,

```
const getQuote = () => {
    let url = `https://frozen-anchorage-84147.herokuapp.com/api/quotes`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let randomNum = Math.floor(Math.random() * data.length);
        let randomQuote = data[randomNum];
        console.log(randomQuote);
        setQuote(randomQuote.sentence);
        setBy(randomQuote.by);
        setFrom(randomQuote.from);
    })
}
```

## Live

- Live version deployed on [Heroku](https://frozen-anchorage-84147.herokuapp.com/)
- Live version of the [quote generator](https://blooming-depths-82764.herokuapp.com/)
