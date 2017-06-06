var express = require('express');
var app = express();
var router = express.Router();

app.get('/', (req, res) {
    console.log('GET request to homepage');
    res.send('Hello world.');
});

app.listen(3000);
app.engine('pug', require('pug').__express);

// what's the difference between the following two lines?
app.set('email', 'mosamuel98@gmail.com'); 
app.locals.email("mosamuel98@gmail.com");

