const express = require('express');
const chatController = express.Router();
const chatHandler = require('../controllers/chat-controller'); // Import the controller file

chatController.get('/views/chat.html', chatHandler.getChat); // Use the imported function

module.exports = chatController;
