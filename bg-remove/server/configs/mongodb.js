import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=>{
        console.log("Mongo database connected")
    })
    await mongoose.connect(`${process.env.MONGO_URI}/bg-removal`)
}

export default connectDB