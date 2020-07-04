const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan());

app.get('/', (req, res) => {
  console.log('log:: GET /');
  res.send('This is a Node.js API running on EC2: GET /');
});

app.get('*', (req, res) => {
  console.log('log:: GET something other than base');
  res.redirect('http://google.com');
});

app.listen(80, () => {
  console.log('Running on port 80');
});
