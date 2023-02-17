const express = require('express');
const dotenv = require('dotenv').config();
const logger = require('morgan');

const connectDB = require('./config/db');
const port = process.env.PORT || 3000;

const messagesRoute = require('./routes/messagesRoute');

connectDB();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/messages', messagesRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
