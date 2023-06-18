import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
    creator: String,
    template_id: String,
    name: String, 
    created: Number, 
    edited: Number, 
    notes: String,
    orientation: String,
    fields: Object,
}, { optimisticConcurrency: true });

module.exports = mongoose.model('Certificate', certificateSchema);