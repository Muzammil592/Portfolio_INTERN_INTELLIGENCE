const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  Technical_skills: {
    type:[String],
    required:true
  },
  Non_Technical_skills: {
    type:[String],
    required:true
  }
});

module.exports = mongoose.model('Skill', skillSchema);
