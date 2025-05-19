import User from "../models/user.model.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../utils/sendMail.utils.js";
// Register controller

const register = async (req,res)=>{

    // 1.Get user data from body
    const {name,email,password} = req.body;
    // Validate data
    if(!name||!email||!password){
        return res.status(400).json({
            message:"All fields are mandotory",
            success:false
        })
    }
    if(password.lenght<6){
        return res.status(400).json({
            message:"Password must be 6 letter .",
            success:false
        })
    }
    // Check the user is present or not in db
   try {
     const existingUser = await User.findOne({email})
     if(existingUser){
        return res.status(400).json({
            message:"User is already exist",
            success:false
        })
     }
    // 2.Create a verification Token
    const token  = crypto.randomBytes(32).toString("hex") ;
    const tokenExpiry =  Date.now()+ 10*60*60*1000;


    // 3.Create new User 
    const user = await User.create({
        name,
        email,
        password,
        verificationToken:token,
        verificationTokenExpiry:tokenExpiry
    })
    if(!user){
        return res.status(500).json({
            success:false,
            message:"User is not created ."
        })
    }

    // 4.Send Email
    const info = await sendVerificationEmail(user.email,token);
    if(!info){
        return res.status(500).json({
            success:false,
            message:"Error while sending email."
        })
    }
    res.status(200).json({
        success:true,
        message:"User registered successfully."
    })

   } catch (error) {
        console.log("error : ", error);
   }

}

export {register};