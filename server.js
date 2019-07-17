const express = require('express');
const app = express();

// app.get('/pokemon', (req, res) => {
//     res.send('hi mr. pokemon')
// })


const Pokemon = require('./models/pokemon')
// console.log(Pokemon);

app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: Pokemon
    });
})







app.listen(3000, () => {
    console.log("this server is happy and running");
})