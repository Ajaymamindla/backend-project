    //    var md      = require('mongodb');
var std_data = require('../data/student_data');
const new_student = require('../models/Student');
//    var mdb_client =md.MongoClient;
// var new_student = require('../models/Student');
// var url_ = "mongodb://127.0.0.1:27017/mernstack_feb";
var db_info = require('../config/db_config');
var db;
// mdb_client.connect(url_,(err,db)=>{
//     if(err) {console.log(" Error in Connecting to DB");}
//     else {
//         var db_object = db.db('mernstack_feb');
//         db_object.createCollection("exmaple_collection",(err,res)=>{
//             if(err){console.log(" Errotr in Creating Collection");}
//             else {console.log(" Collection created successfully!!!");}
//         });
//     }
//     db.close();
// // })

// mdb_client.connect(url_, (err,db)=>{
//     if(err) {console.log(" Error in Connecting to DB");}
//     else {
//         var db_object = db.db('mernstack_feb');

//            db_object.collection('users_info').find({},function (err,result) {
//         if(err) {console.log(" Error in Connecting to DB");}
//         else {
//             console.log(result.name_);
//             db.close();
//         }
//         });  
// }

// });

// mdb_client.connect(url_,{useNewUrlParser:true,useUnifiedTopology:true},function (err,client) {
//     db = client.db();
// })

db_info.db_client.connect(db_info.db_url,{useNewUrlParser:true,useUnifiedTopology:true},function (err,client) {
    if(err){console.log(" Error while connecting tlo DB");}
    else {db= client.db();console.log(" Connected to Database!!!");}
    
});

exports.getStudents =(req,res)=>{   
      db.collection('users_info').find({},{name_:true}).toArray(function (err,elements) {
        res.send(elements);
      })
     // res.send(std_data);
};
exports.getStudent= 
    (req,res)=> { var msg;
        db.collection('users_info').findOne({std_id:Number(req.params.stdid)},function (err,element) {
            if(element==""||element==null){ msg=" No Student found with ID:"+Number(req.params.stdid)}
            else{msg=element}
            
            res.send(msg);
        })
        //console.log(req.params.stdid);
    //res.send(std_data[1]);
};
exports.createStudent = (req,res)=> {
    //  db code
    // logic
    // student object --> student db
    console.log(req.body);
    _name = req.body.userName;
    _place = req.body.userPlace;
     _salary = req.body.userSalary;
    _job = req.body.userJob;
    db.collection('users_info')
    .insertOne({name_:_name,place:_place,salary:_salary,job:_job},function (err,info) {
        res.json(info);
    })
    console.log(new_student.user_name);
      
    //   new_student.user_name = req.body.userName;
    //   new_student.user_place = req.body.userPlace;
    //   new_student.user_mail = req.body.userMail;
    //   console.log(new_student.user_name);
    //res.send(new_student.user_name+ "  STUDENT DATA ADDED");
};
exports.updateStudent = (req,res)=> {
    var student1={name_:'',job:'',salary:0,
           place:''};
          student1.name_ = req.body.userName;
           student1.place = req.body.userPlace;
           student1.salary = req.body.userSalary;
          student1.job = req.body.userJob;
          
    db.collection('users_info')
    .findOneAndUpdate({std_id:Number(req.params.stdid)},
    {$set:{name_:student1.name_,job:student1.job,salary:student1.salary,place:student1.place}},
    function (err,info) {
        res.json(info); 
    })

    //res.send(" UPDATING STUDENT DATA");
};
exports.deleteStudent =(req,res)=> {
    db.collection('users_info')
    .deleteOne({std_id:Number(req.params.stdid)},function (err,info) {
        res.json(info); 
    })
   // res.send(" DELETING STUDENT DATA");
};

// module.exports = [
//   getStudents,
//   getStudent,
//   createStudent,
//   updateStudent,
//   deleteStudent
// ];