const { json } = require('body-parser');

module.exports.reg=async(req,res,next)=>{
    var employees=require('./employees')
    console.log("hey,this is register file");
    const obj=req.body;
    console.log(obj.EmployeeID);
    employees[employees.length]=obj;
    console.log(obj);
    res.send({received:employees});
}