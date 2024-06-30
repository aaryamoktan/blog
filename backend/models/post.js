const mongoose = require("mongoose")
const postSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,   
    }
    ,pic:{
        type:String,
        required:false,  
    }
    ,username:{
        type:String,
        required:true,
    },userid:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        
    }
},{timestamps:true})
module.exports=mongoose.model("post",postSchema);