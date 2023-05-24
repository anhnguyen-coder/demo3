const mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    name: String,
    gender: String,
    DOB: Date,
    GPA: Number,
    image: String
})

var StudentModel = mongoose.model('Student', StudentSchema,'Student');

module.exports = StudentModel;