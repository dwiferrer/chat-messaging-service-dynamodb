const messagesService = require('../services/messagesService');

const createMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Message not provided in body.' });
    }

    const createdMessage = await messagesService.createMessage({ message });
    return res.status(201).json(createdMessage);
  } catch (err) {
    throw new Error(err.message);
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await messagesService.getMessages();
    return res.status(200).json(messages);
  } catch (err) {
    throw new Error(err.message);
  }
};

const getMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await messagesService.getMessage(id);

    if (!message) {
      return res.status(400).json({
        status: 'BadRequestError',
        message: 'Message does not exist.',
      });
    }

    return res.status(200).json(message);
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await messagesService.getMessage(id);

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

module.exports = {
  createMessage,
  getMessages,
  getMessage,
  deleteMessage,
};
