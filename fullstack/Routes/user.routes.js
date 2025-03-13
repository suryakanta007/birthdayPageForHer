import express from "express"
import { registerUser , userVerify } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",registerUser)
router.get("/verify/:token",userVerify)



export default router