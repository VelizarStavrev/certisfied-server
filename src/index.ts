// Libraries
import express from 'express';

// Imports
const routes = require('./routes');

// Configs
const config = require('./config/config');

// DB connection
require('./config/mongoose');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(config.port, () => {
  console.log(`The application is running on port ${config.port}. View at http://${config.hostname}:${config.port}/`)
});
