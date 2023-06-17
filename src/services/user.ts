import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { RegisterData } from '../types/user-types';
const User = require('../models/User');

const { key } = require('../config/jwt');

export async function registerUser(newUserData: RegisterData): Promise<{ status: boolean, message: string, type?: string }> {
    const queryEmail = await User.findOne({ email: newUserData.email });
    const queryUsername = await User.findOne({ username: newUserData.username });

    if (queryEmail) {
        return { status: false, message: `User with email ${newUserData.email} already exists!`, type: 'exists-email' };
    }

    if (queryUsername) {
        return { status: false, message: `User with username ${newUserData.username} already exists!`, type: 'exists-username' };
    }

    const newUser = new User(newUserData);
    const saveResponse = await newUser.save();

    if (saveResponse) {
        return { status: true, message: 'User registered successfully!', type: 'success' };
    }

    return { status: false, message: 'An error occurred!' };
}

export async function loginUser(username: string, password: string): Promise<{ status: boolean, message: string, token?: string }> {
    const user = await User.findOne({ username: username });

    if (!user) {
        return { status: false, message: 'Non-existent username!' };
    }

    const passwordHash = user.password;

    const compareResult = await bcrypt.compare(password, passwordHash);

    if (!compareResult) {
        return { status: false, message: 'Wrong password!' };
    }

    const tokenPayload = {
        uname: username,
        uid: user._id,
        role: user.role,
    };

    const token = jwt.sign(tokenPayload, key);

    return { status: true, message: 'User logged in successfully!', token: token };
}
