var express = require('express');
var app = express();

// Simply serve static files there.
app.use(express.static(__dirname + '/build'));

/**
  Redirect all possible paths to static index.html,
  that will contain a bundled script with application.
  Do not use it in production!
*/
app.get('*', function (req, res){
  res.sendFile(__dirname + '/build/index.html');
});

// By default the server address is http://0.0.0.0:3000
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Application started at http://%s:%s', host, port);
});

module.exports = app;
