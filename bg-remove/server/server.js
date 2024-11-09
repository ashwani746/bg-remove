import 'dotenv/config'
import express from 'express'
import cors from 'cors'

// App Config

const PORT = process.env.PORT || 4000
const app = express ()


// API routes
app.get('/',(req,res)=> res.send("API WORKING"))
app.listen(PORT, ()=> console.log("Server Running on Port"+PORT))