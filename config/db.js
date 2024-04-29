const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://nipunaram:aP7eOUGBDrBA5BXB@cluster0.5xeifld.mongodb.net/?retryWrites=true&w=majority', 
        {
            useNewUrlParser : true,
            useUnifiedTopology : true
        }
        );
        console.log("MongoDB connection created");
    }catch (error){
        console.error("MongoDB connection error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;