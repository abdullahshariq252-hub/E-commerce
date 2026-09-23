const express = require('express')
const cors = require('cors')
const app = express()
const mogoose = require('mongoose')
const {connectMongo} = require("./connection")
const {User} = require("./models/userModel")
const router = require("./routes/user")
const product = require("./routes/product")

app.use(cors())
app.use(express.json())

app.use("/api",router)
app.use("/api",product)


// Database connection to mongodb url
connectMongo('mongodb://127.0.0.1:27017/User_Authentication')
.then(() => console.log("Mongoose connection Successful"))
.catch(error => console.log("Mognoose Error: ",error))


app.listen(8000, () => {
    console.log("Server Connection Successful");
})

