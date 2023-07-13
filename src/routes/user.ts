// Libraries
import express from 'express';
import bcrypt from 'bcrypt';

// Types
import { Login, Register } from '../types/user-types';
import { loginUser, registerUser } from '../services/user.service';

const router = express.Router();

router.post<Register>('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const created = new Date().getTime();
    const role = 2;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, function (err, hash) {
        const newUser = {
            email,
            username,
            password: hash,
            created,
            role
        };

        registerUser(newUser)
            .then((response) => {
                res.send(response);
            })
            .catch(error => {
                console.log('An error occurred during registration.', error);
                res.send({ status: false, message: 'An error occurred!' });
            });
    });
});

router.post<Login>('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    loginUser(username, password)
        .then((response) => {
            res.send(response);
        })
        .catch(error => {
            console.log('An error occurred during login.', error);
            res.send({ status: false, message: 'An error occurred!' });
        });
});

module.exports = router;