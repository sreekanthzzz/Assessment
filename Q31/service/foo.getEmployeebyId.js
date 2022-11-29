module.exports.getEmployee=async(req,res,next)=>{
    var employees=require('./employees')
    try {
        console.log("Getting an Employee by role");
        var id = req.params.id;
        console.log(id);
        var employees=employees.filter(element =>{
            if(element.EmployeeID==id)
                  return element;
            
        });
        res.send({
            employees
        });
    } catch (error) {
        res.send({
            error: `Error occured ${error}`
        })
    } 
}