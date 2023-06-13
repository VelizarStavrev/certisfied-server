import express from 'express';
const router = express.Router();

router.post('/register', (req, res) => {
    console.log('Add this route as a function.');
    res.send('Add this route as a function.');
});

router.post('/login', (req, res) => {
    console.log('Add this route as a function.');
    res.send('Add this route as a function.');
});

module.exports = router;