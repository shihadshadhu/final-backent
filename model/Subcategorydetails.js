const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shadhunihal55:sweee12@cluster0.2kzn7lo.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{console.log("subcat connected")})
.catch(err=>console.log(err));

let sa=mongoose.Schema;
const subcateschema=new sa(
    {
        Sname:String,
        Category:String
    }
);
var subcatemodel=mongoose.model("subcat",subcateschema)
module.exports=subcatemodel;