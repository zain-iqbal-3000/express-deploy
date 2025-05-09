const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/home', (req, res) => {
    res.send('Welcome to Express.js');
});

module.exports.handler = serverless(app);