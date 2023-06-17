import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const { key } = require('../config/jwt');

export function tokenAuth(req: Request, res: Response, next: NextFunction): void {
    const bearerToken = req.headers.authorization?.split(' ')[1] ?? '';

    try {
        const tokenData = jwt.verify(bearerToken, key) as JwtPayload;
        req.body.userId = tokenData.uid;
        next();
    } catch (error) {
        res.send({ status: false, message: 'An error occurred on token validation!' });
    }
};