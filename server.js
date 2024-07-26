// Import the axios library
const axios = require('axios');

// Define the API key and the text to be rephrased
const apiKey = '039sYGVlgTR7t59w5V0150fnd7NyJfEW';
const textToBeRephrased = 'During the semester, the main part of my work was mostly directed to the organization of the educational forum edu monthasdasdasdasdassdas';

// Set up the request config
const config = {
  headers: {
    'apikey': apiKey,
  },
  data: textToBeRephrased, // Pass the actual text to be rephrased here
};

// Define the API endpoint URL
const apiUrl = 'https://api.apilayer.com/paraphraser';

// Use the axios library to make the request
axios.post(apiUrl, {}, config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
