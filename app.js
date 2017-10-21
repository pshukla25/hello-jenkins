var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hi World  try 32!');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
