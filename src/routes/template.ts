// Libraries
import express from 'express';

// Types
import { TemplateRequest } from '../types/template-types';

// Services
import { createTemplate, deleteTemplate, editTemplate, getTemplate } from '../services/template.service';

const router = express.Router();

router.post('/new', (req: TemplateRequest, res) => {
    const currentTimestamp = new Date().getTime();

    const creator = req.body.userId;
    const name = req.body.name;
    const notes = req.body.notes;
    const orientation = req.body.orientation;
    const fields = req.body.fields;
    const created = currentTimestamp;
    const edited = currentTimestamp;

    const data = {
        creator,
        name,
        notes,
        orientation,
        fields,
        created,
        edited,
    };

    createTemplate(data)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during template creation!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

router.post('/edit/:id', (req: TemplateRequest, res) => {
    const currentTimestamp = new Date().getTime();

    const templateId = req.params.id;
    const creator = req.body.userId;
    const name = req.body.name;
    const notes = req.body.notes;
    const orientation = req.body.orientation;
    const fields = req.body.fields;
    const created = currentTimestamp;
    const edited = currentTimestamp;

    const data = {
        creator,
        name,
        notes,
        orientation,
        fields,
        created,
        edited,
    };

    editTemplate(templateId, creator, data)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during template edit!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

router.post('/delete/:id', (req, res) => {
    const templateId = req.params.id;
    const creator = req.body.userId;

    deleteTemplate(templateId, creator)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during template deletion!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

router.get('/:id', (req, res) => {
    const templateId = req.params.id;
    const creator = req.body.userId;

    getTemplate(templateId, creator)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during template retrieval!', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

module.exports = router;