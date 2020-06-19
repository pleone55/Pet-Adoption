const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('pet', PetSchema);