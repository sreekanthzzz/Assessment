var mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
   UserName:{
     type:String,
     require:true
   },
   Password:{
     type:String,
     require:true
   }
});
module.exports = HR = mongoose.model('UserSchema',UserSchema);