var mongoose = require('mongoose');
const EmployeeSchema  = new mongoose.Schema({
    name_:{type:String,required:true},
    place_:{type:String},
    salary_:{type:Number,default:0},
    emp_id:{type:Number,unique:true}
});

const Employee  =mongoose.model("Employee",EmployeeSchema);
module.exports = Employee;