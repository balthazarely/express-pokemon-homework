const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


//middlewear
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));



const Pokemon = require('./models/pokemon')


// Index
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: Pokemon
    });
});

//New
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
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