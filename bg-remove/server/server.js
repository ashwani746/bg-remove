import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'

// App Config

const PORT = process.env.PORT || 4000
const app = express ()
await connectDB()

// API routes
app.get('/',(req,res)=> res.send("API WORKING"))
app.use('/api/user',userRouter)
app.listen(PORT, ()=> console.log("Server Running on Port"+PORT))