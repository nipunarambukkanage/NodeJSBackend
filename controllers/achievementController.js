const Achievement = require('../models/achievements');


async function getAllAchievements(req, res){
    try{
        const achievements = await Achievement.find();
        res.json(achievements);
    }catch(err){
        console.error(err);
        res.status(500).json({error : 'Server error'});
    }
}

async function getAchievementById(req, res){
    const jobId = req.params?.id;
    try{
        const achievement = await Achievement.findById(jobId);
        if(!achievement){
            res.status(404).json({error : 'Achievement not found'});
        }
        res.json(achievement);
    }catch(err){
        console.error(err);
        res.status(500).json({error : 'Server error'});
    }
}

async function createAchievement(req, res){
    const {name, category} = req.body;
    const jobId = req.params?.id;
    try{
        const newAchievement = new Achievement({
            name : name,
            category : category
        });
        const savedAchievement = await newAchievement.save();
        res.status(200).json(savedAchievement);
    }catch(err){
        console.error(err);
        res.status(500).json({error : 'Server error'});
    }
}

module.exports = {
    getAchievementById,
    getAllAchievements,
    createAchievement
}