const Village = require('../models/villages');

// GET all villages
async function getAllVillages(req, res) {
    try {
        const villages = await Village.find();
        res.json(villages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// GET a single village by ID
async function getVillageById(req, res) {
    const villageId = req.params.id;
    try {
        const village = await Village.findById(villageId);
        if (!village) {
            return res.status(404).json({ error: 'Village not found' });
        }
        res.json(village);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// POST a new village
async function createVillage(req, res) {
    const { name, studentName, district, description, gallery, map } = req.body;
    try {
        const newVillage = new Village({
            name,
            studentName,
            district,
            description,
            gallery,
            map,
            addedDate: new Date()
        });
        const savedVillage = await newVillage.save();
        res.status(201).json(savedVillage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// PUT (update) a village by ID
async function updateVillage(req, res) {
    const villageId = req.params.id;
    const updateData = req.body;
    try {
        const updatedVillage = await Village.findByIdAndUpdate(villageId, updateData, { new: true });
        if (!updatedVillage) {
            return res.status(404).json({ error: 'Village not found' });
        }
        res.json(updatedVillage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// DELETE a village by ID
async function deleteVillage(req, res) {
    const villageId = req.params.id;
    try {
        const deletedVillage = await Village.findByIdAndDelete(villageId);
        if (!deletedVillage) {
            return res.status(404).json({ error: 'Village not found' });
        }
        res.json({ message: 'Village deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    getAllVillages,
    getVillageById,
    createVillage,
    updateVillage,
    deleteVillage
};
