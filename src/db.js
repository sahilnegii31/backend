const mongoose = require("mongoose");

async function connectDB(){
    const connection = await mongoose.connect(`${process.env.URI_MONGODB}`)
    console.log("Mongodb connected");
}

module.exports =  connectDB ;

