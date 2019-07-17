const express = require('express');
const app = express();

app.get('/pokemon', (req, res) => {
    res.send('hi mr. pokemon');
})









app.listen(3000, () => {
    console.log("this server is happy and running");
})