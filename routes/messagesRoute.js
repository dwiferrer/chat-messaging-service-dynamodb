const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

router.post('/', messagesController.createMessage);
router.get('/', messagesController.getMessages);
router.get('/:id', messagesController.getMessage);
router.delete('/:id', messagesController.deleteMessage);

module.exports = router;
