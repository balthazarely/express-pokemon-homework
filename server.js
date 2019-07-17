const express = require('express');
const app = express();

app.use(express.static('public'));

const Pokemon = require('./models/pokemon')


// Index
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: Pokemon
    });
});

// Show
app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.index]
    });
});




app.listen(3000, () => {
    console.log("this server is happy and running");
})