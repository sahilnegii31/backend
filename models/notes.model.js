const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    desc :{
        type : String,
        required : true
    }
},{timestamps : true}); 
const notesModel = mongoose.model("notes" , notesSchema );
module.exports = notesModel ;