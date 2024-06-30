const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require("cors");
const user = require("./models/user")
const authrouter = require("./routes/auth")
const userrouter = require("./routes/user")
const cookiesparser = require("cookie-parser")
const postrouter = require("./routes/post")
const commentrouter = require("./routes/comment")
const app = express()
dotenv.config();
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
            .then(() => {
                console.log("data base connected sucesfully")
            })
    }
    catch (err) {
        console.log(err)
    }
}
app.use(cors());
app.use(express.json())
app.use(cookiesparser)
app.use("/api/auth",authrouter)
app.use("/api/user",userrouter)
app.use("/api/post",postrouter)
app.use("/api/comment",commentrouter)
const port = process.env.PORT;
connectdb();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})