//@todo: require more packages

const createError = require('http-errors');
const express = require('express');
const expressGa = require('express-ga-middleware');
const basicAuth = require('express-basic-auth');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/config.js');
app.use(express.static(path.join(__dirname, '../build')));

//@todo: get remainder of express settings applied here




//@todo: move these routes over to separate module
app.get('/api/confessions', function (req, res) {
  console.log('/api/confessions');
  return res.send(require("../test_json/confessions.json"));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
console.log(`listening on ${process.env.PORT || 8080}`);