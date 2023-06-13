import express from 'express';
const router = express.Router();

router.post('/new', (req, res) => {
    console.log('Add this route as a function.');
    res.send('Add this route as a function.');
});

router.post('/edit/:id', (req, res) => {
    console.log(`Add this route as a function. Param is ${req.params.id}`);
    res.send(`Add this route as a function. Param is ${req.params.id}`);
});

router.post('/delete/:id', (req, res) => {
    console.log(`Add this route as a function. Param is ${req.params.id}`);
    res.send(`Add this route as a function. Param is ${req.params.id}`);
});

router.get('/:id', (req, res) => {
    console.log(`Add this route as a function. Param is ${req.params.id}`);
    res.send(`Add this route as a function. Param is ${req.params.id}`);
});

module.exports = router;