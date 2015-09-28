/**
 * Created by davidhoverson on 9/27/15.
 */
var express = require('express');
var app = express();
var students = require('./public/assets/data/carousel');

app.use(express.static(__dirname + '/public'));

app.get('/' , function(req, res){
        res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/carousel' , function(req, res){
    res.send(students);
});

var server = app.listen(process.env.port, function(){
    var port = server.address().port;
    console.log("Listening on port: ", port);
});

module.exports = app;