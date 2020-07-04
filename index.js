const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan());

app.get('/', (req, res) => {
  console.log('log:: GET /');
  res.send('This is a Node.js API running on EC2: GET /');
});

app.get('/:page', function (req, res) {
  console.log('log:: GET something other than base');
  console.log('retrieving page: ' + req.params.page);
  res.redirect('https://aat.org.uk');
});

app.listen(80, () => {
  console.log('Running on port 80');
});
