const { json } = require('body-parser');

module.exports.updateEmployees= async (req,res,next)=>{
    try {
        var employees=require('./employees')
        console.log("Updating an Employee");
        var id = req.params.id;
        console.log(id);
        employees.map(element => {
            console.log(element.EmployeeID);
            if (element.EmployeeID == parseInt(id) ) {
                console.log(element);
                element.Role = req.body.Role;
                element.Name = req.body.Name;
                element.EmployeeID = id;
            }
            return element;
        })
        res.send({
            employees
        });
    } catch (error) {
        res.send({
            error: `Error occured ${error}`
        })
    } 
}