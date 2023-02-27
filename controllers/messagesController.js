const messagesService = require('../services/messagesService');
const { v4: uuidv4 } = require('uuid');

const createMessage = async (req, res) => {
  try {
    const { message, username } = req.body;

    if (!message) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Message not provided in body.' });
    }

    if (!username) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Username not provided in body.' });
    }

    const messageObj = {
      id: uuidv4(),
      username,
      message,
      timestamp: Math.floor(new Date().getTime() / 1000),
      expiresAt: Math.floor(new Date().getTime() / 1000),
    };

    await messagesService.createMessage(messageObj);
    return res.status(201).json('Message successfully sent!');
  } catch (err) {
    throw new Error(err.message);
  }
};

const createBulkMessages = async (req, res) => {
  try {
    const { body } = req;

    if (!body.every((item) => 'message' in item)) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Message not provided in body.' });
    }

    if (!body.every((item) => 'username' in item)) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Username not provided in body.' });
    }

    const mappedBody = await body.map((message) => {
      return {
        ...message,
        id: uuidv4(),
        timestamp: Math.floor(new Date().getTime() / 1000),
        expiresAt: Math.floor(new Date().getTime() / 1000),
      };
    });

    await messagesService.createBulkMessages(mappedBody);
    return res.status(201).json('Messages successfully sent!');
  } catch (err) {
    throw new Error(err.message);
  }
};

const getMessagesByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const { Items } = await messagesService.getMessagesByUsername(username);
    return res.status(200).json(Items);
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await messagesService.getMessageById(id);

    if (!message) {
      return res.status(400).json({
        status: 'BadRequestError',
        message: 'Message does not exist.',
      });
    }

    await messagesService.deleteMessage(id);
    return res.status(200).json('Message successfully deleted.');
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteBulkMessages = async (req, res) => {
  try {
    const { body } = req;

    await messagesService.deleteBulkMessages(body);
    return res.status(201).json('Messages successfully deleted!');
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createMessage,
  createBulkMessages,
  getMessagesByUsername,
  deleteMessage,
  deleteBulkMessages,
};
