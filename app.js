var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var axios = require('axios');

var apiRouter = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/v1', apiRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next()
})

// Proxy router
app.get('/random', (req, res) => {
  axios.get('https://sandbox-api.brewerydb.com/v2/beer/random/?key=eafdb3badd96f50902820174d4b47ed4&params=established')
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.status(500).json({ type: 'error', message: error.message });
    })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

db.sequelize.sync();

module.exports = app;
