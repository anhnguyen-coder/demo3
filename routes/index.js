var express = require('express');
const StudentModel = require('../models/StudentModel');
const SubjectModel = require('../models/SubjectModel');
var router = express.Router();

/* GET home page. */
router.get('/student', async(req,res) => {
  const students = await StudentModel.find()
  // res.send(students)
  res.render('student', {students: students})
 
})

router.get('/student/drop', async(req,res) =>{
  await StudentModel.deleteMany()
  .then(() => {console.log("Delete all student successfully")})
  .catch((err) => {console.error("Delete all student failed")});
  res.redirect('/student')
 })

 router.get('/student/delete/:id', async(req,res) =>{
  //SQL: Xoa student theo id
  await StudentModel.findByIdAndDelete(req.params.id)
  .then(() => {console.log("Delete student successfully")})
  .catch((err) => {console.error("Delete student failed")});
  res.redirect('/student')
 })

router.get('/subject', async(req,res) => {
  const subjects = await SubjectModel.find()
  // res.send(subjects)
  res.render('subject', {subjects: subjects})

 })



module.exports = router;
