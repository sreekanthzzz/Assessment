const { json } = require('body-parser');

module.exports.getEmployees=async(req,res,next)=>{
    var employees=require('./employees')
    console.log("hey,this is getemployees file");
    console.log(employees);
    res.send({employees});
}