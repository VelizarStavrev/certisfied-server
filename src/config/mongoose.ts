const mongoose = require('mongoose');
const { db_uri } = require('./config');

mongoose.connect(db_uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('The DB is connected!');
});

module.exports = db;