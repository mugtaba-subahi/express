const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan());

app.get('/', (req, res) => {
  console.log('log:: GET /');
  res.send('This is a Node.js API running on EC2: GET /');
});

app.get('/skill-store-test', (req, res) => {
  console.log('log:: GET /skill-store-test');
  res.send('This is a Node.js API running on EC2: GET /skill-store-test');
});

app.listen(80, () => {
  console.log('Running on port 80');
});
