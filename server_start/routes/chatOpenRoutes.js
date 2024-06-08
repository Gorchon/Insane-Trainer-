const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const geminiController = require('../controllers/geminiController');
const ragController = require('../controllers/RagController'); // Import RagController

// Define routes
router.post('/chat', chatController.getResponseChat);
router.post('/gemini', geminiController.getResponseChatGemini);
router.post('/rag', ragController.getContextResponse); // Add route for RagController

module.exports = router;
