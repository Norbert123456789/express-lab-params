
const express = require('express');
const app = express();

const name = ['Norbert'];

app.get('/greeting/jimmy-boy', (req, res,) => { 
    res.send(`Wow! Hello there, Jimmy-boy`);
});

app.get('/greeting', (req, res) => { 
    res.send("Hello Stranger");
});

app.listen(3000,() => {
    console.log('listening');
});