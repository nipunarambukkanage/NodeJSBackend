const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');

//GET
router.get('/', achievementController.getAllAchievements);
router.get('/:id', achievementController.getAchievementById);

//POST
router.post('/', achievementController.createAchievement);

//PUT
router.put('/:id', achievementController.updateAchievement);

//DELETE
router.delete('/:id', achievementController.deleteAchievement);

module.exports = router;