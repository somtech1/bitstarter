var express = require('express');
var fs = require("fs");
var app = express.createServer(express.logger());
var text = "";
fs.readFile("./index.html", "utf-8", function (err, data) {
  if (err) throw err;
  text = data;
});

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
