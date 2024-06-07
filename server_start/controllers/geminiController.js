const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

async function getResponseChatGemini(req, res) {
    const { prompt } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    try {
        // Add bodybuilding context and motivational phrase to the prompt
        const bodybuildingPrompt = `You are a professional bodybuilding trainer. Your task is to help achieve insane gains. Remember, "To get insane gains, first you have to be insane." Here is the user's prompt: ${prompt}`;
        const result = await model.generateContent(bodybuildingPrompt);
        const response = await result.response;
        const text = await response.text();
        return res.json({ response: text });
    } catch (err) {
        console.log('Error getting response from Gemini', err);
        return res.status(500).json({ error: 'Error getting response from Gemini' });
    }
}

module.exports = { getResponseChatGemini };
