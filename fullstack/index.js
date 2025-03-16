import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js"
import cookieParser from "cookie-parser";

// Import all routes
import userRoutes from "./Routes/user.routes.js"    

dotenv.config();


const app = express();
app.use(cors({
    origin : process.env.BASE_URL,
    methods : ['GET','POST','DELETE','OPTIONS'],
    credentials :true,
    allowedHeaders:['Content-type','Authorization']
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



const port = process.env.PORT||4000;

app.get("/",(req,res)=>{
    res.send("Cohort!");
})

app.get("/hitesh",(req,res)=>{
    res.send("Hitesh..");
})

app.get("/Piyush",(req,res)=>{
    res.send("Piyush is answering...")
})
// Conneted to db;
db();

// user routes
app.use("/api/V1/users",userRoutes)



app.listen(port,()=>{
    console.log(`App is listening on  port ${port}`)
})
