const mongoose = require('mongoose');

const achievementsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const Achievement = mongoose.model('Achievement', achievementsSchema);

module.exports = Achievement;