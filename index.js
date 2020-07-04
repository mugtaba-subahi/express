const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('This is a Node.js API running on EC2');
});

app.listen(3000);
