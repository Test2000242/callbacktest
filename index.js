const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 8005;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route with query parameters
app.post('/social', (req, res) => {
        console.log("new request");
        console.log(req);
        console.log(req.body);
        
        res.send(`<script>window.opener.postMessage(${JSON.stringify(req.body)}, '*');</script>`);
    });

    
// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
