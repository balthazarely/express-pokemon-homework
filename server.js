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

// Delete
app.delete('/pokemon/:index', (req, res) => {
    Pokemon.splice(req.params.index, 1);
    res.redirect('/pokemon');
})

//Edit
app.get('/pokemon/:index/edit', (req, res) => {
    res.render("edit.ejs", {
        pokemon: Pokemon[req.params.index],
        index: req.params.index
    })
})

// Update
app.put('/pokemon/:index',  (req, res) => {
    Pokemon[req.params.index] = req.body,
    res.redirect('/pokemon')
})

//New
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
}); 

//Post
app.post('/pokemon', (req, res) => {
    console.log(req.body, "this is the new pokemon")
    Pokemon.push(req.body)
    res.redirect('/pokemon')
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