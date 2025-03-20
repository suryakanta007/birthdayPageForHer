import express from "express"
import { registerUser , userVerify, userLogin, forgotPassword,resetPassword,getMe,logoutUser} from "../controllers/user.controller.js";
import { isLogedIn } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register",registerUser);
router.get("/verify/:token",userVerify);
router.post("/login" , userLogin);
router.get("/me",isLogedIn,getMe);
router.get("/logout",isLogedIn,logoutUser);
router.post("/forgetpassword",forgotPassword);
router.post("/resetpassword/:token",resetPassword);



export default router