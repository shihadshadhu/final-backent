const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shadhunihal55:sweee12@cluster0.2kzn7lo.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{console.log("cat connected")})
.catch(err=>console.log(err));

let ca=mongoose.Schema;
const cateschema=new ca(
    {
        Cname:String,
        Status:String
    }
);
var catemodel=mongoose.model("cat",cateschema)
module.exports=catemodel;