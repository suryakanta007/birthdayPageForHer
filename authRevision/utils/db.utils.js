import mongoose from "mongoose";
import dotenv from "dotenv"

const db = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("MongoDB connected.")
    })
    .catch((err)=>{
        console.log('Error conecting DB: ',err);
    })
}

export default db;