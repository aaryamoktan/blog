const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcrypt")
const Post = require("../models/post")
const Comment = require("../models/comment")
const verifyToken = require("../verifyToken")
router.get("/:id",async(req,res)=>
{
    try{
        const id = req.params.id
    const data =await User.findById({_id:id})
    const {password,...info} = data._doc
    res.json(info)
    }
    catch(err)
    {
        res.status(500).json(err)
    }  
})
router.put("/:id",verifyToken,async(req,res)=>
{
    try{
        const password =req.body.password
        const salt =await bcrypt.genSalt(10);
        const haspassword = await bcrypt.hashSync(password,salt)
        const id =req.params.id;
        const data  = await User.findByIdAndUpdate({_id:id},{$set: { password: haspassword } },{new:true})
        res.status(200).json(data)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
router.delete("/:id",verifyToken,async(req,res)=>
{
    try{
        const id = req.params.id;
        console.log(id)
        const data = await User.findByIdAndDelete({_id:id})
        await Comment.findByIdAndDelete({_id:id})
        await Post.findByIdAndDelete({_id:id})
        res.status(200).json(data)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
   
})
module.exports = router