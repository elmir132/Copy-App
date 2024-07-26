const express = require('express');
const app = express();

// Replace with your actual API Key and API Key Secret
const apiKey = 'here yours';
const apiKeySecret = 'here yours';

// Function to fetch tweet text
async function fetchTweetText(url) {
    const fetch = require('node-fetch');
    const response = await fetch(`https://api.twitter.com/2/tweets/extract?url=${encodeURIComponent(url)}`, {
        headers: {
            Authorization: `Bearer ${apiKey}:${apiKeySecret}`
        }
    });
    const data = await response.json();
    return data.data.text;
}

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; font-src 'self' data:;");
    next();
});

app.use(express.static('/Users/elmir/Desktop/X')); // Serve your HTML and CSS files

app.get('/fetch-tweet', async (req, res) => {
    const tweetUrl = req.query.url;
    try {
        const tweetText = await fetchTweetText(tweetUrl);
        res.json({ text: tweetText });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tweet' });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
