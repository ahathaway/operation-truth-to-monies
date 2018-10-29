const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../build')));


app.get('/api/confessions', function (req, res) {
  console.log('/api/confessions');
  return res.send(require("../test_json/confessions.json"));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
console.log(`listening on ${process.env.PORT || 8080}`);