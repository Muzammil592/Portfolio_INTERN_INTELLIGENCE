const express = require('express');
const {
    createSkill, getAllSkills, updateSkill, deleteSkill
} = require('../controllerFuncs/skillcontroller');
// const { protect, runValidations } = require('../middleware/middlewares'); Same: use this when connect with login and signUp

const router = express.Router();

router.post( '/', createSkill);
router.get('/', getAllSkills);
router.put('/:id',updateSkill);
router.delete('/:id',deleteSkill);

module.exports = router;
