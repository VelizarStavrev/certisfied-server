// Libraries
import express from 'express';

// Routes
const user = require('./routes/user');
const template = require('./routes/template');
const certificate = require('./routes/certificate');

// Middlewares
import { tokenAuth } from './middleware/auth';

// Services
import { getCertificate, getCertificates } from './services/certificate.service';
import { getTemplates } from './services/template.service';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('The server is working!');
});

// User related
router.use('/user', user);

// Template related
router.get('/templates', tokenAuth, (req, res) => {
    const creator = req.body.userId;

    getTemplates(creator)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during the retrieval of templates!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

router.use('/template', tokenAuth, template);

// Certificate related
router.get('/certificates', tokenAuth, (req, res) => {
    const creator = req.body.userId;

    getCertificates(creator)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during the retrieval of certificates!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

router.get('/certificate/:id', (req, res) => {
    const certificateId = req.params.id;

    getCertificate(certificateId)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during certificate retrieval!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

router.use('/certificate', tokenAuth, certificate);

router.get('/verify/:id', (req, res) => {
    const certificateId = req.params.id;

    getCertificate(certificateId)
        .then(() => {
            res.send({ status: true, message: 'The certificate exists.' });
        })
        .catch(() => {
            res.send({ status: false, message: 'The certificate was not found.' });
        });
});

module.exports = router;