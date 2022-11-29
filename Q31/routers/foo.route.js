const { Router }=require("express");
const router=new Router();
const fooHRsignup=require("../service/foo.HRSignup");
const fooaddemp=require("../service/foo.createEmp");
const foogetempbyrole=require("../service/foo.getEmployeebyRole");
const foogetempbyid=require("../service/foo.getEmployeebyId");
const foogetemps=require("../service/foo.getEmployees");
const fooupdateemp=require("../service/foo.updateEmployee");
const foohrsignin=require("../service/foo.HRSignin");


router.get("/HR/:username/:password",foohrsignin.signin);
router.get("/employees/:role",foogetempbyrole.getEmployee);
router.get("/employees/",foogetemps.getEmployees);
router.post("/HR/",fooHRsignup.reg);
router.post("/employees/",fooaddemp.reg);
router.put("/employees/:id",fooupdateemp.updateEmployees);
router.get("/employees/search/:id",foogetempbyid.getEmployee);
module.exports=router;