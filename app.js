var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const UserRoutes = require('./src/resources/users/users-route')

app.use('/users', UserRoutes);

// error handler
app.use((err, req, res, next) => {
    console.log("skdk")
    res.send({ status: false, message: err.message || "something went wrong", entity: null });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

module.exports = app;
