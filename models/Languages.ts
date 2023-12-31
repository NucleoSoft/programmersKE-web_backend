const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const languageSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Language', languageSchema);

