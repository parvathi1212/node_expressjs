var express = require('express');
var router = express.Router();
var path = require('path');
var mysql=require('../database/db')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.send("<h2>Hello This is express developed by Parvathi</h2>");
//   // res.sendFile(path.resolve('public/index.html'))
// });


// router.get('/second', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   // res.send("<h2>Hello </h2>");
//   res.sendFile(path.resolve('public/static.html'));
// });



router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('public/index.html'))
  });

router.get('/login', function(req, res, next) {
  res.sendFile(path.resolve('public/login.html'))
});

router.get('/signup', function(req, res, next) {
  res.sendFile(path.resolve('public/signup.html'))
});

router.get('/contactus', function(req, res, next) {
  res.sendFile(path.resolve('public/contactus.html'))
});

router.post('/loginsubmit', function(req, res, next) {
  var output = "user name " + req.body.loginid + '<br>'
  res.send(output);
});
router.post('/signupsubmit', function(req, res, next) {
  var output = '<table border = 2>'
  for(var i in req.body){
    output += '<tr><td>' + i + '</td>'
    output += '<td>' + req.body[i] + '</td></tr>'
  }
  output += '</table>'
  res.send(output);
});
router.get('/ejsdemo', function(req, res, next) {
  res.render('index',{title:"embedded java script code template"})
});

router.get('/fbposts', function(req, res, next) {
  // res.render('index',{title:"embedded java script code template"})
  var posts = [
    {title:'HBD',message:"Happy Birthday to you"},
    {title:'Casual',message:"Hello how are you?"},
    {title:'Announcement',message:"Baahubali movie is releasing on"},
    {title:'Greetings',message:"Greetings of the day"},
    {title:'Events',message:"Mandala art event"},
  ];
  res.render('index',{title:"Facebook Posts",posts:posts});
});

router.get('/askregdno', function(req, res, next) {
  res.sendFile(path.resolve('public/form.html'))
});

router.post('/selectqry', function(req, res, next) {
  var regdno = req.body.regdno;
  mysql.getConnection((err, connection) => {
  if(err) throw err;
  connection.query("select * from student where regno='"+regdno+"'", (err, rows)=> {
  connection.release();
  if(err) throw err;
  res.render('datadisplay', {title:'Student Details',rows:rows});
  // res.send(rows);
});

});
});


router.get('/askinsertdetails', function(req, res, next) {
  res.sendFile(path.resolve('public/insert1.html'))
});


router.post('/insertqry', function(req, res, next) {
  var name = req.body.name
  var email = req.body.email
  var marks = req.body.marks
  var phno = req.body.phno
  var regno = req.body.regno
  var branch = req.body.branch
  mysql.getConnection((err, connection) => {

    let insertQuery = 'INSERT INTO student (name,email,marks,phno,regno,branch) VALUES (?,?,?,?,?,?)';
    
    let iq = connection.format(insertQuery,[name,email,marks,phno,regno,branch]);
    
    connection.query(iq,(err, result) => {
    
    if(err) { console.error(err); }
    
    res.send("Rows are inserted:"+result["affectedRows"]);
    
    });
    
    });
});


router.get('/askupdatedetails', function(req, res, next) {
  res.sendFile(path.resolve('public/updateform.html'))
});

router.post('/updateqry', function(req, res, next) {
  var regno = req.body.regno;
  var marks = req.body.marks;
  mysql.getConnection((err, connection) => {
    let updateQuery = 'Update student set marks=? Where regno=?';
    
    let uq = connection.format(updateQuery,[marks,regno]);
    
    connection.query(uq,(err, result) => {
    
    if(err) { console.error(err); }
    
    res.send("Rows are updated:"+result["affectedRows"]);
    
    });
    
    });
});


module.exports = router;
