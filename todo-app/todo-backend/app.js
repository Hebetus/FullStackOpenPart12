const express = require('express');
require('dotenv').config()
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const statisticsRouter = require('./routes/statistics');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/statistics', statisticsRouter);

module.exports = app;
