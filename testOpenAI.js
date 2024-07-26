const openai = require('openai');

// Set your OpenAI API key
const apiKey = 'api key open ai';
openai.apiKey = apiKey;

async function testOpenAI() {
    try {
        const response = await openai.ChatCompletion.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: 'Rewrite the tweet - This is a test tweet.' }
            ],
        });

        console.log('Response:', response);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

testOpenAI();
