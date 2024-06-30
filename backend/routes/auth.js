const express = require('express')
const router = express.Router();
const user = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10)
        const haspassword = await bcrypt.hashSync(password, salt)
        const userdetail = new user({ username, email, password: haspassword })
        const data = await userdetail.save();
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.post("/login", async (req, res) => {
    try {
        const data = await user.findOne({ email: req.body.email })
        if (!data) {
            return res.status(400).json("user not found")
        }
        const match = await bcrypt.compare(req.body.password, data.password)
        if (!match) {
            return res.status(401).json("wrong criditianl")
        }
        const token =  jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: "3d" })
        const {password,...info} = data._doc
        res.cookie("token",token).status(200).json(info) 
    }
    catch (err) {
        console.log(err)
    }
})
router.get("/logout",async(res,req)=>
{
    try{
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("user logout sucesfully")
    }
    catch(err)
    {
        console.log(err)
    }
})
module.exports = router;