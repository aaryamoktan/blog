const express = require("express")
const router = express.Router()
const User = require("../models/user")
const bcrypt = require("bcrypt")
const Post = require("../models/post")
const Comment = require("../models/comment")
const verifyToken = require("../verifyToken")
router.get("/search/:prompt",async(req,res)=>
{
    const query = req.query;
    try{ 
        const seracrhFilter = {
            title:{$regex:query.search,$optional:"i"}
        }
        const data  = await Post.find(query.search?seracrhFilter:null)
        res.status(200).json(data)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
router.get("/",async(req,res)=>
{
    try{
        const post = await Post.find()
        res.status(200).json(post)
    }
    catch(err)
    {
        console.log(err)
    }
})
router.get("/:id",async(req,res)=>
    {
        try{
            const id = req.params.id
            const post = await Post.find({userid:id})
            res.status(200).json(post)
        }
        catch(err)
        {
            console.log(err)
        }
    })
router.post("/create",verifyToken, async(req, res) => {
    try {
        const {title,discription,pic,username,userid,categories}=req.body;
        const newPost = new Post({title,discription,pic,username,userid,categories});
        const savePost = await newPost.save();
        res.status(200).json(savePost)
    }
    catch (err) {
        console.log(err)
    }
})
router.put("/postEdit/:id",verifyToken,async(req,res)=>
{
    try{
        const id =req.params.id
        const editpost=await Post.findByIdAndUpdate({_id:id},{$set:req.body},{new:true})
        res.status(200).json(editpost);
    }
    catch(err)
    {
        console.log(err)
    }
})
router.delete("/deletepost/:id",verifyToken,async(req,res)=>
{
    try{
        const id= req.params.id
        const deletepost = await Post.findByIdAndDelete({_id:id})
        res.status(200).json(deletepost)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
})
module.exports = router