const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  ptcl:{
    type:String
  }
});

module.exports = mongoose.model('Contact', contactSchema);
