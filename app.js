var express = require('express');

var app = express();

var reload = require('reload')

app.get('/', function (req, res) {
  res.send('Prestoo Magico');
});

reload(app);
app.listen(process.env.PORT || 5000);

module.exports = app;
