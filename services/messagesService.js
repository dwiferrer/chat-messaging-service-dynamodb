const Messages = require('../models/messages');

const createMessage = async (message) => {
  try {
    const createdMessage = await Messages.create(message);
    return createdMessage;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getMessages = async (id) => {
  try {
    return await Messages.find();
  } catch (err) {
    throw new Error(err.message);
  }
};

const getMessage = async (id) => {
  try {
    return await Messages.findOne({ id });
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteMessage = async (id) => {
  try {
    await Messages.deleteOne({ id });
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
