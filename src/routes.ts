import express from 'express';

// Routes
const user = require('./routes/user');
const template = require('./routes/template');
const certificate = require('./routes/certificate');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('The server is working!');
});

// User related
router.use('/user', user);

// Template related
router.get('/templates', (req, res) => {
    console.log('Add this route as a function.');
    res.send('Add this route as a function.');
});

router.use('/template', template);

// Certificate related
router.get('/certificates', (req, res) => {
    console.log('Add this route as a function.');
    res.send('Add this route as a function.');
});

router.use('/certificate', certificate);

router.get('/verify/:id', (req, res) => {
    console.log(`Add this route as a function. Param is ${req.params.id}`);
    res.send(`Add this route as a function. Param is ${req.params.id}`);
});

module.exports = router;