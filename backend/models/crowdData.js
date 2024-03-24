const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crowdDataSchema = new Schema({
    movieName: {
        type: String,
        required: true
    },
    movieScene: {
        type: [String],
        required: true
    },
    movieLocation: {
        type: [String],
        required: true
    },
    voteCounts: {
        type: [mongoose.Schema.Types.Mixed],
        required: true
    }
}, { timestamps: true });

const CrowdData = mongoose.model('CrowdData', crowdDataSchema);
module.exports = CrowdData;