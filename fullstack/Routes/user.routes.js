import express from "express"
import { registerUser , userVerify, userLogin} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",registerUser);
router.get("/verify/:token",userVerify);
router.post("/login" , userLogin)



export default router