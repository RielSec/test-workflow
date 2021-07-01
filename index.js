const express = require('express');
require('dotenv').config();

const app = express();

const PORT = 3000;
const HTTP_200 = 200;

app.get('/', (_request, response) => {
  response.status(HTTP_200).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
