const express = require('express');
const cors = require('cors');
const {createOffer, attachDefaultValidations} = require('./application');
const {config} = require('./config');

const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0';

const app = express();

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/application/constraints', (req, res) => {
  res.status(200).json(config);
});

app.get('/application/offer', (req, res) => {
  attachDefaultValidations(req);
  const amount = parseInt(req.query.amount, 10);
  const term = parseInt(req.query.term, 10);

  const application = createOffer(amount, term);
  res.status(200).send(application);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port ${PORT}`);
});
