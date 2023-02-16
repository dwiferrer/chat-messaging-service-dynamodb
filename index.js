const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const logger = require('morgan');
const messagesRoute = require('./routes/messagesRoute');
const port = process.env.PORT || 3000;

connectDB();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/messages', messagesRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
