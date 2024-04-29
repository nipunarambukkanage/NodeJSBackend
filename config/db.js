const mongoose = require('mongoose');

async function connectDB(){
    try{
        const password = encodeURIComponent('replace_this_with_your_password');
        await mongoose.connect(`mongodb+srv://nipunaram:${password}@cluster0.5xeifld.mongodb.net/?retryWrites=true&w=majority`, 
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