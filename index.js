const express = require('express');
const dotenv = require('dotenv').config();
const logger = require('morgan');

const port = process.env.PORT || 3000;

const messagesRoute = require('./routes/messagesRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/messages', messagesRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
