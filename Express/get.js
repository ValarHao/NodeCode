'use strict';

var express = require('express');
var app = express();

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'index_get.html');
});

app.get('/process_get', function(req, res) {
    var response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('访问地址为 http://%s:%s', host, port);
});