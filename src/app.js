const express = require('express');
const app = express();
const notes = require("../models/notes.model.js");
const notesModel = require('../models/notes.model.js');


app.use(express.json());

app.post('/notes' , async (req , res) =>{
    await notesModel.create({
        title : req.body.title,
        desc : req.body.desc
    })
    res.status(201).json({
        message : "note created"
    })
})
app.get('/notes' , async (req , res) =>{
    const notes = await notesModel.find() 
    res.status(201).json({
        message : "data recieved from database",
        notes : notes 
    })
})

module.exports = app ;