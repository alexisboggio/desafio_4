const express = require('express');
const middlewareError = require('./src/middleware/middleware.error');
const indexRouters = require('./src/routers/index');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));

app.use('/api',indexRouters);
app.use(express.static(__dirname + '/public'))
app.use(middlewareError)

module.exports = app;