const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shadhunihal55:sweee12@cluster0.2kzn7lo.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>{console.log("item connected")})
.catch(err=>console.log(err));

let it=mongoose.Schema;
const itemschema=new it(
    {
        Category:String,
        Subcategory:String,
        Description:String,
        Price:Number,
         image1:{
            data:Buffer,
            contentType:String,
        }
    }
);
var itemmodel=mongoose.model("item",itemschema)
module.exports=itemmodel;