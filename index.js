const express = require('express');
const app = express();
const port = 3000;

// Define the /home endpoint
app.get('/home', (req, res) => {
    res.send('Welcome to Express.js');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});