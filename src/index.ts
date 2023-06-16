// Libraries
import express from 'express';

// Routes
const user = require('./routes/user');
const template = require('./routes/template');
const certificate = require('./routes/certificate');

// Configs
const config = require('./config/config');

// DB connection
require('./config/mongoose');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('The server is working!');
});

app.use('/user', user);

app.get('/templates', (req, res) => {
  console.log('Add this route as a function.');
  res.send('Add this route as a function.');
});

app.use('/template', template);

app.get('/certificates', (req, res) => {
  console.log('Add this route as a function.');
  res.send('Add this route as a function.');
});

app.use('/certificate', certificate);

app.get('/verify/:id', (req, res) => {
  console.log(`Add this route as a function. Param is ${req.params.id}`);
  res.send(`Add this route as a function. Param is ${req.params.id}`);
});

app.listen(config.port, () => {
  console.log(`The application is running on port ${config.port}. View at http://${config.hostname}:${config.port}/`)
});
