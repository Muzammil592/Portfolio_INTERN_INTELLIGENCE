const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  AchievementName:{
    type:String,
    required:true
  },
   Achievementdesc:{
    type:String,
    required:true
  },
  awardedby:{
    type:String,
    required:true
  },
  certificateid:{
    type:String
  }
});

module.exports = mongoose.model('Achievement', achievementSchema);
