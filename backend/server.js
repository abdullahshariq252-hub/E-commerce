const express = require('express')
const cors = require('cors')
const app = express()
const {connectMongo} = require("./connection")
const router = require("./routes/user")
const banner = require("./routes/menPoloBanner")
const product = require("./routes/products")
const kids = require("./routes/kids_routes_all")


app.use(cors())
app.use(express.json())

app.use("/api", router)
app.use("/api", banner)
app.use("/api", product)

//Kids Eastern Western
app.use("/api",kids)

// Database connection to mongodb url
connectMongo('mongodb://127.0.0.1:27017/User_Authentication')
.then(() => console.log("Mongoose connection Successful"))
.catch(error => console.log("Mongoose Error: ", error))

app.listen(8000, () => {
    console.log("Server Connection Successful");
})