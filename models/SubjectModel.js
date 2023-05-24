const mongoose = require('mongoose');

var SubjectSchema = new mongoose.Schema({
    name: String,
   code: Number
})

var SubjectModel = mongoose.model('Subject', SubjectSchema,'Subject');

module.exports = SubjectModel;