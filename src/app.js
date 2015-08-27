// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// var server = app.listen(3000, function() {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://', host, port);
// });

define(["jquery"], function ($) {
    "use strict";

    var App = function (target) {
        this.target = target || $("body");
    };

    App.prototype.start = function () {
        this.target.html("App Started!");
    };

    return App;
});