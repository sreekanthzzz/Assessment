module.exports.getEmployee=async(req,res,next)=>{
    var employees=require('./employees')
    try {
        console.log("Getting an Employee by role");
        var role = req.params.role;
        console.log(role);
        var employees=employees.filter(element =>{
            if(element.Role==role)
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