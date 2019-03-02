var express = require('express');
const path = require('path');
var router = express.Router();
const passport = require('passport');
const auth = require('../tools/authentication.js');
const ac = require('../tools/ac.js');
const tools = require('../tools/general');
const User = require('../models/user');
const TmpUser = require('../models/tmpUser');
const admin = require('./api/admin');
const uuid = require('node-uuid');
const user = require('./api/user');
const dashboard = require('./dashboard/dashboard');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const session=require('express-session');

mongoose.connect("mongodb://localhost/finalDatabase1",{useCreateIndex:true,useNewUrlParser:true});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/panel*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../panel/build/')});
});


router.post('/createAdmin', function (req, res) {
  const user = new User({
    username: "admin",
    password: "admin",
    role: "admin"
  })
  user.save((err, user) =>{
    if(err){
      return res.json({
        success: false,
        msg: "something wrong in admin creation\n"+err.message
      })
    }
    res.json({
      success: true,
      user
    })
  })
})


router.get('/login', (req, res)=>{
  res.render('login')
})


router.post('/login', passport.authenticate('local-login'), (req, res) => {
    console.log(req.body);
    res.json({
      msg: "you are logged in"
    });
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.json({
    msg: "you are logged out"
  });
});

// router.post('/signUp', (req, res)=>{
//   if (!req.body.username || !req.body.password || !req.body.email) {
//     return res.json({
//       success: false,
//       msg: "empty filed"
//     })
//   }
//   let tmpUser = new TmpUser({
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email,
//       code: uuid.v4()
//   })
//   tmpUser.save((err, newTmpUser)=>{
//     if (err) {
//       return res.json({
//         success: false,
//         msg: "something wrong in user sign up\n" + err.message
//       })
//     }
//     tools.sendVerificationMail(newTmpUser.code, newTmpUser.email)
//     res.json({
//       success: true,
//       newTmpUser
//     })
//   })
// })

router.post('/signup', (req, res)=>{
  console.log("@@@@@@@@@@@SERVER");
  console.log(!req.body.firstName);
  console.log(!req.body.lastName);
  console.log(!req.body.userName)
  console.log(!req.body.password)
  console.log(!req.body.mobile)
  if (!req.body.firstName || !req.body.lastName || !req.body.userName || !req.body.password || !req.body.mobile) {
    console.log("^^^^^^^^^^^^^^^^")
    return res.json({
      success: false,
      msg: "empty filed"
    })
  }
  
  let user = new User({
    
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password,
    // sex: req.body.sex,
    // avatar: req.body.avatar,
    mobile:req.body.mobile,
      
  })
  console.log("dhfgfdg:");
  console.log(req.body);
  user.save((err, user1)=>{
    console.log("*********")
    if (err) {
      console.log("err.message");
    console.log(err);
      return res.json({
        success: false,
        msg: "something wrong in user sign up \n" + err.message
      })
    }
    
    
    // tools.sendVerificationMail(newTmpUser.code, newTmpUser.email)
    res.json({
      success: true,
      user1
    })
  })
})


router.get('/verify/:id', (req, res)=>{
  
})

router.use('/api/admin', auth.isLogedIn, ac.roleBaseAccess(['admin']),admin);
router.use('/api/user', auth.isLogedIn, ac.roleBaseAccess(['admin', 'user']), user);



module.exports = router;
