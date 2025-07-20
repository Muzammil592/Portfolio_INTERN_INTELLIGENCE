const express = require('express');
const {
  createAchievement, getAllAchievements, updateAchievement, deleteAchievement
} = require('../controllerFuncs/achievementcontroller');
// const { protect, runValidations } = require('../middleware/middlewares');

const router = express.Router();

router.get('/', getAllAchievements);

router.post('/',createAchievement);

router.put('/:id',updateAchievement);

router.delete('/:id',deleteAchievement);

module.exports = router;
