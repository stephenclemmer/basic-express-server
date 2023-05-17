'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
// const errorHandler = require ('./error-handlers/500');
const validator = require('./middleware/validator.js');
const logger = require('./middleware/logger.js');

const PORT = process.env.PORT || 3002;

const app = express();

// LETTING EXPRESS KNOW ABOUT THE MIDDLEWARE AS MIDDLEWARE
app.use(logger);
app.use(validator);
// app.use(errorHandler);

// ROUTES
app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/person', validator);

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.use('*', notFound);


// START FUNCTION

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

// EXPORTS

module.exports = { app, start };
