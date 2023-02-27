const dynamoDB = require('../config/dynamo');
const MESSAGES_TABLE = 'messages'; // Update db name
const USERNAME_INDEX = 'username-index';

const createMessage = async (message) => {
  const params = {
    TableName: MESSAGES_TABLE,
    Item: message,
  };

  try {
    await dynamoDB.put(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
};

const createBulkMessages = async (messages) => {
  const mappedMessages = messages.map((message) => {
    return {
      PutRequest: {
        Item: {
          id: message.id,
          username: message.username,
          message: message.message,
          timestamp: message.timestamp,
          expiresAt: message.expiresAt,
        },
      },
    };
  });

  const params = {
    RequestItems: {
      [MESSAGES_TABLE]: mappedMessages,
    },
  };

  try {
    await dynamoDB.batchWrite(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
};

const getMessagesByUsername = async (username) => {
  const params = {
    TableName: MESSAGES_TABLE,
    IndexName: USERNAME_INDEX,
    KeyConditionExpression: 'username = :username',
    ExpressionAttributeValues: {
      ':username': `${username}`,
    },
  };

  try {
    return await dynamoDB.query(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
};

const getMessageById = async (id) => {
  const params = {
    TableName: MESSAGES_TABLE,
    Key: { id },
  };

  try {
    const { Item } = await dynamoDB.get(params).promise();
    return Item;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteMessage = async (id) => {
  const params = {
    TableName: MESSAGES_TABLE,
    Key: { id },
  };

  try {
    await dynamoDB.delete(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteBulkMessages = async (ids) => {
  const mappedIds = ids.map((id) => {
    return {
      DeleteRequest: {
        Key: {
          id: id.id,
        },
      },
    };
  });

  const params = {
    RequestItems: {
      [MESSAGES_TABLE]: mappedIds,
    },
  };

  try {
    await dynamoDB.batchWrite(params).promise();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createMessage,
  createBulkMessages,
  getMessagesByUsername,
  getMessageById,
  deleteMessage,
  deleteBulkMessages,
};
