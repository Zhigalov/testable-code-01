var express = require('express'),
    app = express();

app.get('/ping', function (req, res) {
    res.send(200, 'pong');
});

module.exports = app;