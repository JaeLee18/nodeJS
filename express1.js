/**
 * Created by jaejoonglee on 5/25/17.
 */
var express = require('express');
var app = express();

// Home
app.get('/', function(req, res){
        res.send('Hello HomePage');
});

app.get('/login', function(req, res) {
        res.send('Login required');
    });
app.listen(3000, function(){
    console.log('Connected 3000 port');
});