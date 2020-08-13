const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/www'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/www/index.html');
});

// hide powered by express in headers
app.disable('x-powered-by');

const port = process.env.PROD_WEB_SERVER_PORT || 8111;
app.listen(port, () => console.log(`Node.js Web Server is working on port [:${port}]`));
