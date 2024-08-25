const express = require('express');
const app = express();
const port = 3000;

// Handle GET request to the root URL (/)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Handle GET request to /about
app.get('/about', (req, res) => {
  res.send('About Us');
});

// Handle POST request to /submit
app.post('/submit', (req, res) => {
  res.send('Form Submitted');
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
