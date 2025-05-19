
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.utils.js";
import userRoute from "./Routes/user.route.js"
dotenv.config();
const app = express();
const port = process.env.PORT||4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin:process.env.BASE_URL,
  methods:['GET','POST','PUT','OPTIONS','PATCH'],
  allowedHeaders:['content-type','Authorization']
}))

app.use("/api/v1/users",userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

db();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})