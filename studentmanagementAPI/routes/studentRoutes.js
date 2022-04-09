var express = require('express');
var msg      = require('../home');
var router  = express.Router();
// var [getStudents,
//     getStudent,
//     createStudent,
//     updateStudent,
//     deleteStudent]   =        require('../controllers/studentController');

 var stdControlller = require('../controllers/studentController');
express().use(express.urlencoded({extended:true}));

router.get('/',stdControlller.getStudents);
 router.get('/:stdid',stdControlller.getStudent);
router.post('/addStudent',stdControlller.createStudent);

router.put('/updateStudent/:stdid',stdControlller.updateStudent);
router.delete('/deleteStudent/:stdid',stdControlller.deleteStudent);


module.exports  = router;
















// router.get('/home',(req,res)=>{
//     console.log(req.url);
//     res.send('<h1>'+msg+'</h1>')
// }); router.get('/login',(req,res)=>{
//     res.send('Welcome to Login page.')
// });
// router.get('/register',(req,res)=>{
//     res.send('Welcome to Signup page.')
// });
// router.post('/addstd',(req,res)=>{
//     console.log(req.body);
//       console.log(req.body.userPlace);
//       console.log(req.body.userMail);
//     res.send('STUDENT ADDED SUCCESSFULLY.');
// });
// router.put('/updatestd',(req,res)=>{
//     res.send('STUDENT UPDATED SUCCESSFULLY.');
// });