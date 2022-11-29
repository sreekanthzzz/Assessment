const { json } = require('body-parser');

module.exports.signin= async (req,res,next)=>{
    try {
        var employees=require('./hr')
        var username = req.params.username;
        var password=req.params.password
        var flag=0;
        employees.map(element => {
            
            if (element.UserName == username && element.Password==password ) {
                flag=1;
                return true;

            }

        })
        if(flag==0){
            employees=false;

        }
        if(flag==1){
            employees=true;
        }
        res.send({
            employees
        });
    } catch (error) {
        res.send({
            error: `Error occured ${error}`
        })
    } 
}