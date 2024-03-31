const mongoose=require("mongoose") 
mongoose.connect("mongodb+srv://shadhunihal55:sweee12@cluster0.2kzn7lo.mongodb.net/test?retryWrites=true&w=majority") 
.then(()=>{console.log("order Connected")}) 
.catch(err=>console.log(err)); 
const orderschema=new mongoose.Schema({ 
    name:String,
    address:String,
   phone:Number,
   
    }
  
  ); 
    var ordermodel=mongoose.model("order",orderschema) 
    module.exports=ordermodel