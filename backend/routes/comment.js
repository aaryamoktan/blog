const express = require("express")
const router = express.Router()
const Comment = require("../models/comment");
const verifyToken = require("../verifyToken");
router.post("/savecomment",async(req,res)=>
{
    try{
        const {comment,auther,postId,userId} = req.body;
        const savecomment = new Comment({comment,auther,postId,userId});
        const save = await savecomment.save();
        res.status(200).json(save)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
router.delete("/delete/:id",verifyToken,async(req,res)=>
{
    try{
        const id =req.params.id;
        const data = await post.findByIdAndDelete({_id:id})
        res.status(200).json("deleted sucesfully")
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
router.get("/comment/:id",async(req,res)=>
{
    try{
        const id =req.params.id;
        const data = await Comment.findById({postId:id})
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
router.put("/update/:id",verifyToken,async(req,res)=>
    {
        try{
            const id =req.params.id;
            const data  = await User.findByIdAndUpdate({_id:id},{$set: req.body },{new:true})
            res.status(200).json(data)
        }
        catch(err)
        {
            res.status(500).json(err)
        }
    })
module.exports = router