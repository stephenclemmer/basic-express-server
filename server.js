'use strict';

const express = require('express');
const notFound = require('./src/error-handlers/404');
const errorHandler = require ('./src/error-handlers/500');

const PORT = process.env.PORT || 3002;

const app = express();