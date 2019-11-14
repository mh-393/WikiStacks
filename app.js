const express = require('express');
const app = express();

const index = require('./views/index');

app.get('/', (req, res, next) => {
  res.send('anything');
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Listening on PORT 3000');
});
