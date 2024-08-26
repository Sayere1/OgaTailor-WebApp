import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import clothRouter from "./SysFlow/clothRoute.js"
import userRouter from "./SysFlow/userRoute.js"
import 'dotenv/config'
import cartRouter from "./SysFlow/cartRoute.js"
import orderRouter from "./SysFlow/orderRoute.js"


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api end point
app.use("/api/cloth",clothRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})