const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shadhunihal55:sweee12@cluster0.2kzn7lo.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{console.log("ulogin Connected")})
.catch(err=>console.log(err));
const ulogschema=new mongoose.Schema({
    name:String,
    password:String,
});
var data3model=mongoose.model("signups",ulogschema)
module.exports=data3model