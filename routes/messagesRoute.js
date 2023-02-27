const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.post('/', messagesController.createMessage);
router.post('/bulk', messagesController.createBulkMessages);
router.delete('/bulk', messagesController.deleteBulkMessages);
router.get('/:username', messagesController.getMessagesByUsername);
router.delete('/:id', messagesController.deleteMessage);

module.exports = router;
