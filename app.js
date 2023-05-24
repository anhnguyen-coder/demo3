var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

var app = express();

//khai bao thu vien mongoose de conect voi database server
var mongoose = require('mongoose');

//khai bao duong danh local or server dan den database
//can khai bao ro ten cua database can ket noi 
var cloud = "mongodb+srv://anhndgch210594:Ducanhlaso1@cluster0.nphdmoi.mongodb.net/GCH1101"
var local = "mongodb://127.0.0.1:27017/GCH1101"

//Connect den database
//Code moi cho mongoose
mongoose.connect(cloud)
.then(()=>{
  console.log("Connect to DB server successfully!!");
})

.catch((err)=>{
  console.error(err);
})


//Code danh cho phien ban cu
// mongoose.connect(server,(err)=>{ 
//   if(err)
//   {
//     console.error(err);
//   }
//   else {
//     console.log("Connect to DB successfully")
//   }
// })


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000)

module.exports = app;
