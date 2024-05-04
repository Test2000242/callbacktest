const express = require('express');
const app = express();
const port = 8005;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route with query parameters
app.post('/social', (req, res) => {
        console.log(req.body);
        console.log(req);
        res.send(`<script>window.opener.postMessage(${JSON.stringify(req.body)}, '*');</script>`);
    });

    
// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
