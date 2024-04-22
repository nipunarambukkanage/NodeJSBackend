const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');

//GET
router.get('/', achievementController.getAllAchievements);
router.get('/:id', achievementController.getAchievementById);

//POST
router.get('/', achievementController.createAchievement);

// //PUT
// router.get('/:id', achievementController.updateAchievement);

// //DELETE
// router.get('/:id', achievementController.deleteAchievement);

module.exports = router;