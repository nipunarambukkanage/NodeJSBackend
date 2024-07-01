const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    id: Number,
    imageUrl: String,
    caption: String
});

const villageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    gallery: [gallerySchema],
    map: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        default: Date.now
    }
});

const Village = mongoose.model('Village', villageSchema);

module.exports = Village;
