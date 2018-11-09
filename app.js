const express = require('express');
const app = express();
const main = require('./views/main');

app.get('/', (req, res) => {
  res.send(main(''));
});

app.listen(3000, () => {
  console.log('this is running on port: 3000');
});
