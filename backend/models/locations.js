const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    imdbID: {
        type: String,
        required: true
    },
    movieTitle: {
        type: String,
        required: true
    },
    location: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;