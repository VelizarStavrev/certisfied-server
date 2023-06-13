import express from 'express';
const user = require('./routes/user');
const template = require('./routes/template');
const certificate = require('./routes/certificate');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

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

app.listen(port, () => {
  console.log(`The application is running on port ${port}. View at http://${hostname}:${port}/`)
});
