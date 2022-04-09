var express = require('express');
var msg      = require('../home');
var router  = express.Router();
var EmpModel =  require('../models/Employee');


router.post('/add-emp',(req,res)=>{
    const emp = new EmpModel(req.body);
    try{emp.save(); res.send(emp)}
    catch(error){res.status(500).send(error)}
});
router.get('/emps',(req,res)=>{
    const emps = EmpModel.find();
    try{ res.send(emps)}
    catch(error){res.status(500).send(error)}
});
// router.get('/',(req,res)=>{
//     console.log(req.url);
//     res.send('<h1>'+'EMPLOYEE DEFAULT PAGE'+'</h1>')
// });
// router.get('/home',(req,res)=>{
//     console.log(req.url);
//     res.send('<h1>'+msg+'</h1>'+'EMPLOYEE ')
// }); router.get('/login',(req,res)=>{
//     res.send('Welcome to EMPLOYEE Login page.')
// });
// router.get('/register',(req,res)=>{
//     res.send('Welcome to EMPLOYEE Signup page.')
// });


module.exports  = router;