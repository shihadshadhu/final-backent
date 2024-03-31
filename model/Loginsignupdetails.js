const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shadhunihal55:sweee12@cluster0.2kzn7lo.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{console.log("Signup connected")})
.catch(err=>console.log(err));

let log=mongoose.Schema;
const loginschema=new log(
    {
    name:String,
    email:String,
    password:String,
      
    }
);
var signupmodel=mongoose.model("signup",loginschema)
module.exports=signupmodel;