const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect('connection string goes here', 
        {
            useNewUrlParser : true,
            useUnifiedTopology : true
        }
        );
        console.log("MongoDB connection created");
    }catch (error){
        console.error("MongoDB connection error!");
        process.exit(1);
    }
}

module.exports = connectDB;