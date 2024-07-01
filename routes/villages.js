const express = require('express');
const router = express.Router();
const villageController = require('../controllers/villageController');

// GET all villages
router.get('/', villageController.getAllVillages);

// GET a single village by ID
router.get('/:id', villageController.getVillageById);

// POST a new village
router.post('/', villageController.createVillage);

// PUT (update) a village by ID
router.put('/:id', villageController.updateVillage);

// DELETE a village by ID
router.delete('/:id', villageController.deleteVillage);

module.exports = router;
