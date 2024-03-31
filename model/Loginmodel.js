const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shadhunihal55:sweee12@cluster0.2kzn7lo.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{console.log("login Connected")})
.catch(err=>console.log(err));
const logschema=new mongoose.Schema({
    username:String,
    password:String,
});
var data2model=mongoose.model("Log",logschema)
module.exports=data2model