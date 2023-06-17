import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
    creator: String,
    name: String, 
    created: Number, 
    edited: Number, 
    notes: String,
    orientation: String,
    fields: Object,
}, { optimisticConcurrency: true });

module.exports = mongoose.model('Template', templateSchema);