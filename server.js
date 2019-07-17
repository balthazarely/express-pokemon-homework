const express = require('express');
const app = express();

app.use('/public', express.static('public'));



const Pokemon = require('./models/pokemon')


app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: Pokemon
    });
});

app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.index]
    });
});







app.listen(3000, () => {
    console.log("this server is happy and running");
})