// Libraries
import express from 'express';

// Types
import { CertificateRequest } from '../types/certificate-types';

// Services
import { createCertificate, deleteCertificate, editCertificate } from '../services/certificate.service';

const router = express.Router();

router.post('/new', (req: CertificateRequest, res) => {
    const currentTimestamp = new Date().getTime();

    const creator = req.body.userId;
    const template_id = req.body.template_id;
    const name = req.body.name;
    const notes = req.body.notes;
    const fields = req.body.fields;
    const created = currentTimestamp;
    const edited = currentTimestamp;

    const data = {
        creator,
        template_id,
        name,
        notes,
        fields,
        created,
        edited,
    };

    createCertificate(data)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during certificate creation!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

router.post('/edit/:id', (req: CertificateRequest, res) => {
    const currentTimestamp = new Date().getTime();

    const certificateId = req.params.id;
    const creator = req.body.userId;
    const template_id = req.body.template_id;
    const name = req.body.name;
    const notes = req.body.notes;
    const fields = req.body.fields;
    const created = currentTimestamp;
    const edited = currentTimestamp;

    const data = {
        creator,
        template_id,
        name,
        notes,
        fields,
        created,
        edited,
    };

    editCertificate(certificateId, creator, data)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during certificate edit!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

router.post('/delete/:id', (req, res) => {
    const certificateId = req.params.id;
    const creator = req.body.userId;

    deleteCertificate(certificateId, creator)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during certificate deletion!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

module.exports = router;