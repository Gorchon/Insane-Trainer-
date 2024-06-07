const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
// const ragController = require('../controllers/RagController');



const geminiController = require('../controllers/geminiController');
router.post ('/chat', chatController.getResponseChat);
router.post('/gemini', geminiController.getResponseChatGemini);
// router.post('/context', ragController.getContextResponse);


module.exports = router; 