const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle the POST request to submit the survey data
app.post('/post', (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    const age = req.body.age;
    const maritalStatus = req.body.marital_status;

    // Send a response displaying the submitted data
    res.send(`
        <h1>Survey Successfully Submitted...</h1>
        <p>Name: ${name}</p>
        <p>Gender: ${gender}</p>
        <p>Age: ${age}</p>
        <p>Marital Status: ${maritalStatus}</p>
    `);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
