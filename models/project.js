const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    githublink: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
