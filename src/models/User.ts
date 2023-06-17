import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    created: Number,
    role: Number
}, { optimisticConcurrency: true });

module.exports = mongoose.model('User', userSchema);